<template>
 <div id="filter">
   <input type="text" v-model="input" autofocus/>

   <ul>
     <li v-for="item in filteredUsers">  <span> {{item.id}} </span>  </li>
   </ul>
 </div>

</template>

<script>

  export default {
    data() {
      return {
        input: '',
        array: [
          {id: "100 Continue («продолжай»)"},
          {id: "101 Switching Protocols («переключение протоколов»)"},
          {id:" 200 OK («хорошо»)"},
          {id:"201 Created («создано»)"},
          {id:"202 Accepted («принято»)"},
          {id:"203 Non-Authoritative Information («информация не авторитетна»)"},
          {id:"204 No Content («нет содержимого»)"},
          {id:"205 Reset Content («сбросить содержимое»)"},
          {id:"206 Partial Content («частичное содержимое»)"},
          {id:"207 Multi-Status («многостатусный»)"},
          {id:"226 IM Used («использовано IM»)"},
          {id:"300 Multiple Choices («множество выборов»)"},
          {id:"301 Moved Permanently («перемещено навсегда»)"},
          {id:"302 Moved Temporarily («перемещено временно»)"},
          {id:"302 Found («найдено»)"},
          {id:"303 See Other (смотреть другое)"},
          {id:"304 Not Modified (не изменялось)"},
        ]
            }
            },
      computed: {
        filteredUsers: function () {
          return this.array.filter(function (item) {
            return item.id.indexOf(this.input) !== -1
          }.bind(this))
                                    },

  }
            }









</script>

<style scoped lang="scss">
 span{
   background: yellow;
   background: none;
}

</style>
