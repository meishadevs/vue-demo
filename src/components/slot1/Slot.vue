<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <!-- 使用child组件 s -->
    <child>
      <!-- 添加到child组件中的html，html会渲染到child组件下的slot标签上 s -->
      <div class="tmpl">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <!-- 添加到child组件中的html，html会渲染到child组件下的slot标签上 e -->
    </child>
    <!-- 使用child组件 e -->
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {

    //引入外部组件
    components: {

      //引入child组件
      'child': Child
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
