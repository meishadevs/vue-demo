
<template>
  <div class="directive">
    <h3 class="title">传递多个参数给自定义指令</h3>
    <p>在控制台中查看</p>
    <div v-demo="{color: 'white', text: 'hello'}"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        parem1: "",
        parem2: ""
      }
    },

    //注册局部自定义指令
    directives:{

      /**
       * 创建一个指令名称为demo的自定义指令
       * @param el 指令所绑定的元素
       * @param binding 一个包含了自定义指令信息的对象
       */
      demo(el, binding, vnode) {
        console.log("color:", binding.value.color);
        console.log("text:", binding.value.text);
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
