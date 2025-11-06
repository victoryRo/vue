<template>
  <div>
    <h1>VUE Directives</h1>

    <h2 v-if="age > 21">You are of legal age</h2>
    <h2 v-else>You are minor ok...</h2>
  </div>
  <hr>
  <div>
    <h2>Current day is number {{ today() }}</h2>
    <h2>Today is {{ week[today()] }}</h2>
    <h2 v-show="week[1] == 'Monday'">monday is the second day</h2>
  </div>
</template>

<script setup lang="ts">

const age: number = 21

const week: any = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const today = (): number => {
  return new Date().getDay()
}

// Directivas de seleccion por una condicion
// v-if=""
// v-else-if=""
// v-else
//
// v-show = usa display: 
</script>

<style scoped>
h1 {
  font-family: Helvetica, Arial, sans-serif;
  color: mediumvioletred;
  text-align: center;
  text-decoration: underline;
}

h2 {
  font-family: sans-serif;
  color: grey;
}
</style>
