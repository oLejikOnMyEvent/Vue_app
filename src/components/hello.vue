<template>
    <div>
      <h1> hello there</h1>
      <h1> Choice your destiny</h1>

        <div>
            Search: <input type="text" v-model="query" placeholder="Search" />
        </div>
        <br />
        <div v-html="highlight()"></div>
    </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      query: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim leo massa, sed aliquet leo posuere ut. Curabitur malesuada accumsan erat, id varius eros tincidunt quis. Vivamus lobortis, odio at fermentum efficitur, risus est tincidunt nisl, eget condimentum tellus dui vitae nibh. Donec id lorem condimentum, porttitor augue in, fermentum leo. Morbi condimentum, nunc ut malesuada placerat, sem nulla condimentum purus, iaculis tristique metus diam lobortis enim. Suspendisse potenti. Quisque urna magna, porta eget erat ac, pharetra vehicula erat. Suspendisse sed nisi ex."
    };
  },
  methods: {
    highlight() {
      if (!this.query) {
        return this.content;
      }
      return this.content.replace(new RegExp(this.query, "gi"), match => {
        return '<span class="highlightText">' + match + "</span>";
      });
    }
  }
};
</script>

<style >
.highlightText {
  background: yellow;
}
</style>
