<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <child>
      <!-- 添加到child组件中的html，html会渲染到child组件下的name属性值为up的slot标签上 s -->
      <div class="tmpl" slot="up">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <!-- 添加到child组件中的html，html会渲染到child组件下的name属性值为up的slot标签上 e -->
      <!-- 添加到child组件中的html，html会渲染到child组件下的name属性值为down的slot标签上 s -->
      <div class="tmpl" slot="down">
        <span>菜单-1</span>
        <span>菜单-2</span>
        <span>菜单-3</span>
        <span>菜单-4</span>
        <span>菜单-5</span>
        <span>菜单-6</span>
      </div>
      <!-- 添加到child组件中的html，html会渲染到child组件下的slot标签上 s -->
      <div class="tmpl">
        <span>菜单->1</span>
        <span>菜单->2</span>
        <span>菜单->3</span>
        <span>菜单->4</span>
        <span>菜单->5</span>
        <span>菜单->6</span>
      </div>
	   <!-- 添加到child组件中的html，html会渲染到child组件下的slot标签上 e -->
    </child>
  </div>
</template>

<script>
  import child from './child.vue'
  export default {

    //使用外部组件
    components:{
      child
    }
  }
</script>

<style scoped>
  .father{
    width:100%;
    background-color: #ccc;
    height: 650px;
  }
  .tmpl{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 30%;
    margin: 0 auto;
  }
  .tmpl span{
    border:1px solid red;
    height:50px;
    line-height: 50px;
    padding: 10px;
  }
</style>
