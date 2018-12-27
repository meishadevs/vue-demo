
<template>
  <div class="render">

    <anchored-heading v-bind:level="1">
      <a name="hello-world" href="javascript:;">
        一级标题
      </a>
    </anchored-heading>

  </div>
</template>

<script>
  import anchoredHeading from "./anchoredHeading.js";

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
