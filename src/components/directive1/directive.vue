<template>
  <div class="directive">
    <h3 class="title">使用局部自定义指令获得输入框的焦点</h3>
    <input class="focus" type="text" placeholder="局部自定义指令" v-focus>
  </div>
</template>

<script>
  export default {

    //注册局部自定义指令
    directives:{

      //指令名称
      focus: {

        /**
         * 自定义指令的钩子函数，当绑定的元素插入DOM时调用（仅保证父节点存在，但不一定被插入文档中）
         * @param el 绑定自定义指令的元素
         */
        inserted: function (el) {

          //设置el元素获得焦点
          el.focus();
        }
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
