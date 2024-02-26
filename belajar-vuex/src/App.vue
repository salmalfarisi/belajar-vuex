<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoForm,
	TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
