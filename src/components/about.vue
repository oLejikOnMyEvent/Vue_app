<template>
  <div id="about" novalidate="true">
    <div class ="block_about">
      <div class="name">
      <h1 @click="newname"> <i class="fa fa-edit"> <span>  {{name}} </span>  </i>  </h1>

      </div>

      <div class="text"> <h3> Email </h3> </div>
   <div class="email"> <input type="email" v-model="email" name="email"/> </div>
      <div class="redtext"> <span class="redtext"> должен быть валиден и принадлежать @neolant.ru </span> </div>


      <div class="text"> <h3> Birthday date </h3> </div>
    <input type="date"/>
    <div class="text"> <h3> Born place </h3></div>
      <select v-model="array">
        <option v-for="items in array" > {{array}} </option>
      </select>
      <select>
        <option>{{}} </option>
      </select>
      <select>
        <option>{{}} </option>
      </select>


    <div class="text"> <h3> About you</h3>  </div>
    <textarea></textarea>
      <hr>
    <div class="save"> <button> save</button></div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          name: 'Osipov Oleg',
          newname: false
        }

      },
      methods: {},


        computed: {},

      ready:{

      }

      }




</script>

<style >
  .block_about{
    margin-right: auto;
    margin-left: 10px;
  }
  .redtext {
    color: red;
  }
  .hide{
    visibility: hidden;
  }
  .fa fa-save{

  }
</style>
