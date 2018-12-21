
<template>
  <div class="anchoredHeading">
    <h1 v-if="level == 1">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
    </h1>
    <h2 v-else-if="level == 2">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
    </h2>
    <h3 v-else-if="level == 3">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
    </h3>
    <h4 v-else-if="level == 4">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
    </h4>
    <h5 v-else-if="level == 5">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
    </h5>
    <h6 v-else-if="level == 6">
      <a name="hello-world" href="javascript:;">
        <slot></slot>
      </a>
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
