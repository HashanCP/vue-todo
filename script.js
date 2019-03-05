Vue.component("todo-form", {
  template: `
    <form class="todo-form" @submit.prevent="addItem">
      <input v-model="todoItem" type="text" />
      <button>Add</button>
    </form>
  `,

  props: [],

  data: function() {
    return {
      todoItem: ""
    };
  },

  methods: {
    addItem() {
      this.$emit("add", { text: this.todoItem, done: false });
      this.todoItem = "";
    }
  }
});

Vue.component("todo-list", {
  template: `
    <ol class="todo-list">
      <li v-for="todo in list">
        <label>
          <input type="checkbox" v-on:change="toggle(todo)" v-bind:checked="todo.done"/>

          <del v-if="todo.done">{{ todo.text }}</del>
          <ins v-else>{{ todo.text }}</ins>
        </label>
      </li>
    </ol>
  `,
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    }
  },

  data: function() {
    return {};
  },

  methods: {
    toggle(todoItem) {
      this.$emit("done", todoItem.text);
    }
  }
});

new Vue({
  el: "#app",

  data: {
    todos: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn Vue", done: false },
      { text: "Learn Electron", done: false },
      { text: "Build Apps", done: false }
    ]
  },

  methods: {
    addTodoItem(todoItem) {
      this.todos.push(todoItem);
    },

    completeItem(todoText) {
      this.todos.forEach(todo => {
        if (todo.text == todoText) todo.done = !todo.done;
      });
    }
  }
});
