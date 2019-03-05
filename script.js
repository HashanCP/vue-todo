new Vue({
  el: "#app",

  data: {
    message: "Hello HTML!"
  },

  methods: {
    changeTitle() {
      this.message = "Greetings from Vue.js"
    }
  }
});
