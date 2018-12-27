
export default {

  //组件名称
  name: "anchoredHeading",

  render(createElement) {

    /**
     * 创建描点标题组件
     * 第一个参数：HTML标签字符串、组件选项对象、或者一个返回值类型为String/Object的函数。该参数是必须的
     * 第二个参数：一个包含模板相关属性的数据对象，这样我们可以在template中使用这些属性，该参数是可选的
     * 第三个参数：标签下的子标签(子节点)，该参数是可选的
     * 返回值：虚拟DOM(可以简写成VNode)
     */
    return createElement(

      //标签名称
      "h" + this.level,

      //插入标签中的子元素
      this.$slots.default
    );
  },

  //接收从父组件中传递过来的数据
  props: {

    //H标签的等级
    level: {

      //level属性的数据类型为Number
      type: Number,

      //level属性为必填属性
      required: true
    }
  }
};
