
<template>
  <div class="directive">
    <h3 class="title">查看自定义指令的参数</h3>
    <div class="demo" v-demo:foo.a.b="message"></div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        message: "hello"
      }
    },

    //注册局部自定义指令
    directives:{

      demo: {

        //指令第一次绑定到元素时调用，只调用一次，可以进行一次性的初始化设置
        bind: function (el, binding, vnode) {
          var s = JSON.stringify;
          el.innerHTML =

            //指令名，不包含v-前缀
            "指令名称："       + s(binding.name) + "<br>" +

            //指令的绑定值，例如：v-demo="hello" 中，绑定值为hello
            "指令的绑定值："      + s(binding.value) + "<br>" +

            //字符串形式的指令表达式。例如 v-demo="1 + 1"
            "字符串形式的指令表达式：" + s(binding.expression) + "<br>" +
            "argument："   + s(binding.arg) + "<br>" +

            //Vue编译生成的虚拟节点
            "Vue编译生成的虚拟节点：" + Object.keys(vnode).join(", ")

        }
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
