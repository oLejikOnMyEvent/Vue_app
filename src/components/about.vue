<template>
  <div id="about" novalidate="true">
    <div class="block_about">
      <div class="name">
        <i
          class="fa fa-save"
          v-if="editName"
          @blur="editName = false; $emit('update')"
          @keyup.enter="editName = false; $emit('update')"
        >
          <input v-model="name">
        </i>
        <div v-else>
          <h1 @click="editName = true">
            <i class="fa fa-edit">{{name}}</i>
          </h1>
        </div>
      </div>

      <div class="text">
        <h3>Email</h3>
      </div>
      <div class="email">
        <input type="email" v-model="email" name="email" @keyup="CheckEmail(email)">
      </div>
      <div class="text">
        <span id="redtext">должен быть валиден и принадлежать @neolant.ru</span>
      </div>

      <div class="text">
        <h3>Birthday date</h3>
      </div>
      <input type="date">
      <div class="text">
        <h3>Born place</h3>
      </div>
      <select></select>
      <select>
        <option></option>
      </select>
      <select>
        <option></option>
      </select>

<div class="jsonOnject"> <span v-for="items in myJson"
:key="items.id">{{items}}</span></div>
      <div class="text">
        <h3>About you</h3>
      </div>
      <textarea v-model="about"></textarea>
      <hr>
      <div class="save">
        <button @click="CheckEmail(email)">save</button>
      </div>
    </div>
  </div>
</template>

<script>
const emailRegEx = /^([a-zA-Z0-9_\.\-])+\@((neolant)+\.)+([a-zA-Z0-9]{2,4})+$/;
import json from './json/countries.json';
export default {
  data() {
    return {
      countries: [],
      birthday: null,
      country: null,
      region: null,
      town: null,
      about: "",
      email: " ",
      myJson: json,
      name: "Osipov Oleg",
      editName: false,
      visibility: "visible",

      message: "Hello Vue.js!",
      emailRules: [
        v =>
          emailRegEx || "Email должен быть валидным и принадлежать @neolant.ru"
      ]
    };
  },
  mounted() {
    if (localStorage.about) {
      this.about = localStorage.about;
    }
  },
  methods: {
    abouted() {
      localStorage.about = this.about;
    },
    CheckEmail(email) {
      if (emailRegEx.test(email)) {
        document.getElementById("redtext").style.color = "grey";
      } else {
        document.getElementById("redtext").style.color = "red";
      }
    },
    
  
  },

  computed: {
parsedJson(){ 

JSON.parse(myJson);
 console.log(parsedJson());
 }     
  },
 
  ready() {
    //  var vm = this;
    // vm.countries = require('../../data/countries.json');
    // var saved = JSON.parse(localStorage.getItem('saved'));
    // _.extend(vm, saved);
  }
};

</script>

<style scope>
.block_about {
  margin-right: auto;
  margin-left: 10px;
}
#redtext {
  color: red;
}

.greytext {
  color: grey;
}
.hide {
  visibility: hidden;
}
.fa fa-save {
}
</style>
