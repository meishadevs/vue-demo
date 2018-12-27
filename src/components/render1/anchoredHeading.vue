
<template>
  <div class="anchoredHeading">
    <h1 v-if="level == 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level == 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level == 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level == 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level == 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level == 6">
      <slot></slot>
    </h6>
  </div>
</template>

<script>
  export default {
    name: "anchoredHeading",

    props: {
      level: {

        //level属性的数据类型为Number
        type: Number,

        //level属性为必填属性
        required: true
      }
    }
  };
</script>

<style scoped>
</style>
