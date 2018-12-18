
<template>
  <div class="directive">
    <h3 class="title">使用全局自定义指令获得输入框的焦点</h3>
    <input class="focus" type="text" placeholder="全局自定义指令" v-focus>
  </div>
</template>

<script>
  export default {}
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
