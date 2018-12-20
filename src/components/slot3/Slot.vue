<template>
  <div class="father">
    <h3>我是父组件</h3>
    <!-- 第一次使用：用flex展示数据 -->
    <child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>
    </child>

    <!-- 第二次使用：用列表展示数据 -->
    <child>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>
    </child>

    <!-- 第三次使用：直接显示数据 -->
    <child>
      <template slot-scope="user">
        {{user.data}}
      </template>
    </child>

    <!-- 第四次使用：不使用其提供的数据 -->
    <child>
      我就是模板
    </child>
  </div>
</template>

<script>
  import child from "./child.vue";

  export default {

    //使用外部组件
    components: {
      child
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }

  .father {
    width: 100%;
    height: 650px;
    background-color: #ccc;
  }

  .tmpl {
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  .tmpl span {
    height: 50px;
    line-height: 50px;
    padding: 10px;
    border: 1px solid red;
  }
</style>
