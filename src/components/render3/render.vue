
<template>
  <div class="render">

    <anchored-heading :level="2">
      Hello World!
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
