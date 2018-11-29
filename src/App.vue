<template>
  <div id="app" class="container">
    <ul class="nav navbar-nav">
  <i class="fa fa-home">  <router-link  active-class="active" to="/"> Home </router-link> </i>
   <i class="fa fa-list">   <router-link active-class="active"  to="/todolist"> TodoList</router-link>  </i>
      <i class="fa fa-filter"> <router-link   active-class="active" to="/filter">filter </router-link> </i>
    <i class="fa fa-user">  <router-link  active-class="active" to="/about"> about</router-link> </i>
    </ul>
    <router-view>
 </router-view>
    </div>
</template>

<script>
</script>

<style scope>
* {
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>
