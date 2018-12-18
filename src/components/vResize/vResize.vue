
<template>
  <div class="vResize">
    <h3 class="title">自定义v-resize指令监听窗口的大小变化</h3>
    <div class="demo" v-resize="getSize">
      浏览器窗口宽：{{winSize.width}}，浏览器窗口高：{{winSize.height}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        winSize: {
          width: 0,
          height: 0
        }
      }
    },

    mounted() {
      //调用获得浏览器窗口大小的方法
      this.getSize();
    },

    //注册局部自定义指令
    directives:{

      resize: {

        //当绑定的元素插入DOM时调用
        inserted: function (el, binding) {

          //获得绑定的值
          var callback = binding.value;

          //定时器200毫秒调用一次
          var debounce = 200;

          //阻止事件的默认行为
          var options = {passive: true};
          var debounceTimeout = null;
          var onResize = function () {

            //清除定时器
            clearTimeout(debounceTimeout);

            /**
             * 创建一个只调用一次的定时器
             * @param callback 定时器回调函数
             * @param debounce 调用定时器需要等待的时间
             * @param option 传递给定时器回调函数的其它参数
             */
            debounceTimeout = setTimeout(callback, debounce, options);
          }

          //监听浏览器窗口大小的变化
          window.addEventListener("resize", onResize, options);
          el._onResize = {
            callback: callback,
            options: options
          };
        },

        //当自定义指令与元素解绑时调用
        unbind: function(el, binding) {
          var callback = el._onResize.callback;
          var options = el._onResize.options;
          window.removeEventListener("resize", callback, options);
          delete el._onResize;
        }
      }
    },

    methods: {

      //获得浏览器窗口的大小
      getSize: function() {
        this.winSize = {

          //获得浏览器窗口的宽度
          width: window.innerWidth,

          //获得浏览器窗口的高度
          height: window.innerHeight
        };
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
