new Vue({
  el: "#app",

  data: {
    todos: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn Vue", done: false },
      { text: "Learn Electron", done: false },
      { text: "Build Apps", done: false }
    ],
    newTodoItem: ''
  },

  methods: {
    toggle(todoItem) {
      todoItem.done = !todoItem.done
    },

    addNewTodoItem() {
      this.todos.push({
        text: this.newTodoItem,
        done: false
      });
      this.newTodoItem = ''
    }
  }
});
