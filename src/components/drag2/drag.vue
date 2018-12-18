
<template>
  <div class="drag">
    <h3 class="title">拖拽效果</h3>
    <div id="parent">
      <div id="box" v-drag>位置：(<span id="position">0, 0</span>)</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        positionX: 0,
        positionY: 0
      }
    },

    //局部自定义指令
    directives: {

      //自定义v-drag指令
      drag: {

        /**
         * 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性初始化设置
         * @param ele 绑定指令的元素
         */
        bind:function (ele) {

          //监听鼠标的点击事件
          ele.onmousedown = (e) => {

            //获得当前拖动的元素
            let box = e.target;

            //获得当前拖动的元素的父元素
            let parentNode = box.parentNode;

            //获得父元素的宽度和高度
            //因为父元素中每边存在一个像素大小的边框，所以需要减2
            let parentWidth = parentNode.offsetWidth - 2;
            let parentHeight = parentNode.offsetHeight- 2;

            //获得当前拖动的元素的宽度和高度
            let boxWidth = box.offsetWidth;
            let boxHeight = box.offsetHeight;

            //计算鼠标相对元素的位置
            let disX = e.clientX - box.offsetLeft;
            let disY = e.clientY - box.offsetTop;

            //监听鼠标移动的事件
            document.onmousemove = (e) => {

              //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              let left = e.clientX - disX;
              let top = e.clientY - disY;

              if (left < 0) {
                left = 0;
              }

              if (left > parentWidth - boxWidth) {
                left = parentWidth - boxWidth;
              }

              if (top < 0) {
                top = 0;
              }

              if (top > parentHeight - boxHeight) {
                top = parentHeight - boxHeight;
              }

              //指令中不能修改data下面的属性值，这里用原生js
              document.querySelector("#position").innerHTML = left + ", " + top;

              //移动当前元素
              box.style.left = left + "px";
              box.style.top = top + "px";
            };

            //监听鼠标松开的事件
            document.onmouseup = (e) => {
              document.onmousemove = null;
              document.onmouseup = null;
            }
          }
        }
      }
    }
  }
</script>

<!-- 添加scoped属性的作用是限制样式只在当前组件中起作用 -->
<style scoped>
  #parent {
    width: 600px;
    height: 600px;
    margin-left: 400px;
    border: solid 1px #f00;
    position: relative;
  }

  #box {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    color: #000;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
