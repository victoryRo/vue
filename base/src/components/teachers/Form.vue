<template>
  <h1>Form</h1>
  <section class="content">
    <h3>Add Teacher</h3>
    <div class="forma">
      <label for="name">Name</label>
      <input type="text" v-model="teacher.name" id="name" placeholder="Your name...">
      <label for="surname">Surname</label>
      <input type="text" v-model="teacher.surname" id="surname" placeholder="Your surname...">
      <label for="dni">DNI / NIF</label>
      <input type="text" v-model="teacher.dni" id="dni" placeholder="Your number of identification...">
      <label for="subject">Subjects</label>
      <input type="text" v-model="subject" id="subject" placeholder="your diferent subjects...">
      <button class="btn-subject" @click="addSubject">Add subject</button>
      <ul>
        <li v-for="(item, index) in teacher.subjects" :key="index">
          {{ item }}
        </li>
      </ul>
      <input type="checkbox" v-model="teacher.doc"> <span class="doc">Documentation delivered</span>
      <button class="btn-teacher" @click="addTeacher">Add teacher</button>
    </div>
  </section>

  <section class="content">
    <h3>List Teachers</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>DNI</th>
          <th>Subjects</th>
          <th>Documentation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in teachers" :key="item.dni">
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
          <td>{{ item.dni }}</td>
          <td>
            <ul>
              <li v-for="(e, i) in item.subjects" :key="i">{{ e }}</li>
            </ul>
          </td>
          <td>
            <span v-if="item.doc">Delivered</span>
            <span v-else>Not delivered</span>
          </td>
          <td>
            <button class="btn-delete" @click="deleteTeacher(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";

interface ITeacher {
  name: string;
  surname: string;
  dni: string;
  subjects: Array<string>;
  doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
  name: "",
  surname: "",
  dni: "",
  subjects: [],
  doc: false,
})

let subject: Ref<string> = ref("")
let teachers: Ref<Array<ITeacher>> = ref([])

const addSubject = () => {
  teacher.value.subjects.push(subject.value)
  subject.value = ""
};

const addTeacher = () => {
  // creamos un nuevo objeto para pasar los datos
  // y evitar la reactividad pasando el objeto referenciado (ref)
  teachers.value.push({
    name: teacher.value.name,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    doc: teacher.value.doc
  })
  cleanTeacher()
};

const cleanTeacher = () => {
  teacher.value.name = "";
  teacher.value.surname = "";
  teacher.value.dni = "";
  teacher.value.subjects = [];
  teacher.value.doc = false;
};

const deleteTeacher = (index: number) => {
  // Elimina 1 elemento en el índice dado.
  teachers.value.splice(index, 1)
}
</script>

<style scoped>
.content {
  margin-top: 50px;
  width: 80%;
  border: 1px solid gray;
  margin: auto;
  padding: 2rem;
}

h1,
h3 {
  text-align: center;
  font-family: Helvetica, sans-serif;
}

/* form */
.forma {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 77%;
  margin: auto;
}

label {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
}

input[type=text] {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=checkbox] {
  margin: 8px 0;
}

.doc {
  font-family: Arial, Helvetica, sans-serif;
  color: #595959;
}

.btn-teacher {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
}

.btn-subject {
  background-color: #007acc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
}

.btn-subject:hover {
  background-color: dodgerblue;
}

.btn-delete {
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  margin: 4px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 0.9em;
}

.btn-delete:hover {
  background-color: red;
}

ul li {
  list-style-type: none;
  color: #595959;
}

/* table */
table {
  font-family: Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: auto;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
