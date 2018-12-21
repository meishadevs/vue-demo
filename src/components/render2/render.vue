
<template>
  <div class="render">
    <anchored-heading v-bind:level="1">一级标题</anchored-heading>
    <anchored-heading v-bind:level="2">二级标题</anchored-heading>
    <anchored-heading v-bind:level="3">三级标题</anchored-heading>
    <anchored-heading v-bind:level="4">四级标题</anchored-heading>
    <anchored-heading v-bind:level="5">五级标题</anchored-heading>
    <anchored-heading v-bind:level="6">六级标题</anchored-heading>
  </div>
</template>

<script>
  import anchoredHeading from "./anchoredHeading";

  export default {

    components: {
      anchoredHeading
    }
  };
</script>

<style scoped>
  .render {
    margin-top: 50px;
  }
</style>
