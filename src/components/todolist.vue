<template>

  <div>
    todolist
    <input type="text" class="todo-input" v-model="newTodo" @keyup.enter="addTodo"/>
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div>
        {{todo.title}}
      </div>
      <div class="remove-item" @click="removeTodo(index)">
        &times;
      </div>

    </div>

  </div>

</template>

<script>
    export default {
      name: "todolist",
      data() {
        return {
          newTodo: '',
          idForTodo: 3,
          todos: [
            {
              'id': 1,
              'title': 'Write',
              'complited': false,
            },
            {
              'id': 2,
              'title': 'your tasks',
              'complited': false,
            },
          ]
        }
      },
      methods: {
        addTodo() {
          if(this.newTodo.trim() == 0){
            return
          }
          this.todos.push({
            id: this.idForTodo,
            title: this.newTodo,
            complited: false,
        });
          this.newTodo ='';
          this.idForTodo++;
        },
        removeTodo(index){
          this.todos.splice(index, 1)
        }
      }
    }

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
