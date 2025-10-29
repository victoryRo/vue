import { type Ref, ref } from 'vue'
import Post from '@/interfaces/Post.ts'

class PostService {
    private posts: Ref<Array<Post>>
    private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts'            

    constructor() {
        this.posts = ref([])
    }

    getPosts(): Ref<Array<Post>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const response = await fetch(this.urlPosts)
            const data = await response.json()
            this.posts.value = await data
        } catch (error) {
           console.log(error) 
        }
    }
}

export default PostService
