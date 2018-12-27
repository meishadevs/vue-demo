
<template>
  <div class="render">

    <anchored-heading v-bind:level="1">
      <a name="hello-world" href="javascript:;">
        一级标题
      </a>
    </anchored-heading>

    <anchored-heading v-bind:level="2">
      <a name="hello-world" href="javascript:;">
        二级标题
      </a>
    </anchored-heading>

    <anchored-heading v-bind:level="3">
      <a name="hello-world" href="javascript:;">
        三级标题
      </a>
    </anchored-heading>

    <anchored-heading v-bind:level="4">
      <a name="hello-world" href="javascript:;">
        四级标题
      </a>
    </anchored-heading>

    <anchored-heading v-bind:level="5">
      <a name="hello-world" href="javascript:;">
        五级标题
      </a>
    </anchored-heading>

    <anchored-heading v-bind:level="6">
      <a name="hello-world" href="javascript:;">
        六级标题
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
