<template>
  <div class="father">
    <h3>我是父组件</h3>
    <!-- 使用child组件  -->
    <child>
      <!-- 添加到child组件中的html，html会渲染到child组件下的slot标签上 -->
      <div class="tmpl">
        <span>我是添加到child组件中的文本</span>
      </div>
    </child>
  </div>
</template>
<script>
  import child from './child.vue'

  export default {

    //引入外部组件
    components: {

      //引入child组件
      child
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
  .father {
    width: 100%;
    background-color: #ccc;
    height: 650px;
  }

  .tmpl {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 30%;
    margin: 0 auto;
  }

  .tmpl span {
    border: 1px solid red;
    height: 50px;
    line-height: 50px;
    padding: 10px;
  }
</style>
