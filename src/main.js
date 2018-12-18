
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

//注册一个全局自定义指令v-focus
Vue.directive("focus", {

  /**
   * 自定义指令的钩子函数，当绑定的元素插入DOM时调用（仅保证父节点存在，但不一定被插入文档中）
   * @param el 绑定自定义指令的元素
   */
  inserted: function (el) {

    //设置el元素获得焦点
    el.focus();
  }
});
