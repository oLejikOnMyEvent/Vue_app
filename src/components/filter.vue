<template>
 <div id="filter">
   <input type="text" class="Serch" v-model="input" placeholder="just Search"/>
    <input type="text" class="higtlight" v-model="query" placeholder="color Search" />
   <ul>
     <li v-for="item in filteredUsers"
     :key="item.id">  <span> {{item.id}} </span>  </li>
   </ul>
  <ul v-html="highlight()">
    <li v-for="value in list"
    :key="value.id">
      <span>{{value}}</span>
    </li>
  </ul>


 </div>

</template>

<script>
export default {
  data() {
    return {
      input: "",
      query: " ",
      array: [
        { id: "100 Continue («продолжай»)" },
        { id: "101 Switching Protocols («переключение протоколов»)" },
        { id: " 200 OK («хорошо»)" },
        { id: "201 Created («создано»)" },
        { id: "202 Accepted («принято»)" }
      ],
      list: [
        "100 Continue («продолжай»)",
        "101 Switching Protocols («переключение протоколов»)",
        "200 OK («хорошо»)",
        "201 Created («создано»)",
        "201 Created («создано»)",
        "202 Accepted («принято»)"
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.array.filter(
        function(item) {
          return item.id.indexOf(this.input) !== -1;
        }.bind(this)
      );
    },
    highlight() {
      return this.list.replace(new RegExp(this.query, "gi"), match => {
        return '<span class="highlightText">' + match + "</span>";
      });
    },
    
  }
};
</script>

<style>
.highlightText {
  background: yellow;
}
</style>
