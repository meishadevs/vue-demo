export default {

  //组件名称
  name: "anchoredHeading",

  render(createElement) {

    var headingId = getChildrenTextContent(this.$slots.default)

      //将大写转换成小写
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^\-|\-$)/g, "");

    /**
     * 创建描点标题组件
     * 第一个参数：HTML标签字符串、组件选项对象、或者一个返回值类型为String/Object的函数。该参数是必须的
     * 第二个参数：一个包含模板相关属性的数据对象，这样我们可以在template中使用这些属性，该参数是可选的
     * 第三个参数：标签下的子标签(子节点)，该参数是可选的
     * 返回值：虚拟DOM(可以简写成VNode)
     */
    return createElement(
      "h" + this.level,
      [
        createElement("a",
          {

            //设置属性
            attrs: {
              name: headingId,
              href: "#" + headingId
            },

            //设置样式
            style: {
              color: "red",
              fontSize: "20px"
            },

            //设置类
            class: {
              foo: true,
              bar: false
            },

            //DOM属性
            domProps: {
              innerHTML: "baz"
            },

            //接收从父组件中传递过来的数据
            props: {
              myProp: "bar"
            },

            //设置组件上绑定的事件
            on: {

              //在组件上绑定一个鼠标点击事件
              click: function (event) {

                //阻止事件的默认行为
                event.preventDefault();
                console.log("你点击了链接");
              }
            }
          },

          this.$slots.default
        )
      ]
    )
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

//获得子节点中的文本内容
var getChildrenTextContent = function (children) {

  return children.map(function (node) {
    return node.children ? getChildrenTextContent(node.children) : node.text
  }).join("");
};
