const CounterApp = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(CounterApp).mount(document.querySelectorAll('[id*="vue_app"]')[0])
