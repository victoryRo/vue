
import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App)

// directives with values
app.directive('font-size', {
  beforeMount: (el, binding) => {
    el.style.fontSize = binding.value + "px"
  }
})
app.directive('format', {
  beforeMount: (el, binding) => {
    el.style.textTransform = binding.value
  }
})

// directives with arguments
app.directive("bg", {
  beforeMount: (el, binding) => {
    let color = "violet";
    switch (binding.arg) {
      case "bl":
        color = "blue";
      break;
      case "gr":
        color = "green";
      break;
      case "or":
        color = "orange";
      break;
      default:
        color = "red";
      break;
    }
    el.style.backgroundColor = color
  }
})

// directives with modifiers
app.directive("custom-font", {
  beforeMount: (el, binding) => {
    let size = 16;
    let color = "gray"

    if (binding.modifiers.small) {
      size = 12;
    } else if (binding.modifiers.medium) {
      size = 18;
    } else if (binding.modifiers.large) {
      size = 34;
    }

    if (binding.modifiers.red) {
      color = "#ff0000"
    } else if (binding.modifiers.blue) {
      color = "#0000ff"
    } else if (binding.modifiers.green) {
      color = "#00ff00"
    }

    el.style.fontSize = size + "px";
    el.style.color = color
  }
})

app.mount('#app')
