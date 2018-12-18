<template>
  <div class="index">
    <h1>{{ title }}</h1>
    <div class="demo-list">
      <div class="demo-item">
        <h2>自定义指令</h2>
        <ul>
          <li>
            <router-link to="/directive1">局部自定义指令</router-link>
          </li>
          <li>
            <router-link to="/directive2">全局自定义指令</router-link>
          </li>
          <li>
            <router-link to="/directive3">查看自定义指令的参数</router-link>
          </li>
          <li>
            <router-link to="/directive4">传递多个参数给自定义指令</router-link>
          </li>
          <li>
            <router-link to="/vImage">使用自定义指令实现一个简单的图片懒加载效果</router-link>
          </li>
          <li>
            <router-link to="/vResize">使用自定义指令监听窗口大小的变化</router-link>
          </li>
          <li>
            <router-link to="/drag1">拖拽效果</router-link>
          </li>
          <li>
            <router-link to="/drag2">使用自定义指令实现的拖拽效果</router-link>
          </li>
        </ul>
      </div>
      <div class="demo-item">
        <h2>插槽使用示例</h2>
        <ul>
          <li>
            <router-link to="/slot1">单个插槽</router-link>
          </li>
          <li>
            <router-link to="/slot2">具名插槽(slot上增加了一个name属性的插槽)</router-link>
          </li>
          <li>
            <router-link to="/slot3">作用域插槽(在slot上绑定了数据的插槽)</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        title: "Vue.js示例"
      }
    }
  }
</script>

<style scoped>
  h1,
  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
