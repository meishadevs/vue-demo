
<template>
  <div class="vImage">
    <h3 class="title">自定义v-image指令实现一个简单的图片懒加载效果</h3>
    <!-- 遍历imageList数组 -->
    <div v-for="item in imageList">
      <img src="../../assets/bg.png" alt="默认图" v-image="item.url">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageList: [
          {
            url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
          },
          {
            url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
          },
          {
            url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
          }
        ]
      }
    },

    //注册局部自定义指令
    directives:{

      image: {

        /**
         * 自定义指令的钩子函数，当绑定的元素插入DOM时调用
         * @param el 绑定自定义指令的元素
         * @param binding 指令绑定的对象
         */
        inserted: function (el, binding) {

          //为了真实体现效果，用了延时操作
          setTimeout(function () {

            //binding.value表示指令绑定的值，此次的值为item.url
            el.setAttribute("src", binding.value);
          }, 3000);
        }
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
</style>
