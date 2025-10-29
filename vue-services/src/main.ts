import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// preprocessor css

const app = createApp(App)
app.use(router)

// custom directive modifiers
app.directive("case", {
    beforeMount: (el, binding) => {
        let option: string = "";

        if (binding.modifiers.upper) {
            option = "uppercase" 
        } else if (binding.modifiers.capi) {
            option = "capitalize"
        } else if (binding.modifiers.lower) {
            option = "lowercase"
        }
        el.style.textTransform = option
    }
})

app.mount('#app')
