// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// ---------------------------------------- directiva value

// v-font-size="20"
app.directive('font-size', {
  beforeMount: (el, bind) => {
    el.style.fontSize = bind.value + 'px'
  },
  // updated: (el, bind) => {}
})

// v-text-trans="'uppercase'"
app.directive('text-trans', {
  beforeMount: (el, bind) => {
    el.style.textTransform = bind.value
  }
})

// ---------------------------------------- directiva argumentos

// v-bg:bl
app.directive('bg', {
  beforeMount: (el, bind) => {
    let color = "gray";

    switch (bind.arg) {
      case "bl":
        color = "#b3cce6";
        break;
      case "gr":
        color = "#c2d6d6";
        break;
      default:
        color;
        break;
    }

    el.style.backgroundColor = color;
  }
})

// ---------------------------------------- directiva modificador

// v-custom-font.large.blue
app.directive('custom-font', {
  beforeMount: (el, bind) => {
    let size = 16;
    let color = "gray";

    if (bind.modifiers.small) {
      size = 12;
    } else if (bind.modifiers.medium) {
      size = 18;
    } else if (bind.modifiers.large) {
      size = 32;
    }

    if (bind.modifiers.red) {
      color = "red";
    } else if (bind.modifiers.blue) {
      color = "blue";
    } else if (bind.modifiers.green) {
      color = "green";
    }

    el.style.fontSize = size + 'px';
    el.style.color = color;
  }
})

app.mount('#app')
