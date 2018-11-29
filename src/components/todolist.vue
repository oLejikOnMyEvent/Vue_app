<template>

  <div>
    todolist
    <input type="text" class="todo-input" v-model="newTodo" @keyup.enter="addTodo"/>
    <div v-for="(todo, index) in todos" :key="todo" class="todo-item">
      <div>
        {{todo}}
      </div>
      <div class="remove-item" @click="removeTodo(index)">
        &times;
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      todos: ["Write", "your tasks"],
      newTodo: ""
    };
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index);
    },
    addTodo() {
      if (this.todos.indexOf(this.newTodo) === -1 && this.newTodo.trim()) {
        this.todos.push(this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  // height: 30px;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>
