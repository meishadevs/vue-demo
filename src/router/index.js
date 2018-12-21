import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import slot1 from "@/components/slot1/Slot";
import slot2 from "@/components/slot2/Slot";
import slot3 from "@/components/slot3/Slot";
import directive1 from "@/components/directive1/directive";
import directive2 from "@/components/directive2/directive";
import directive3 from "@/components/directive3/directive";
import directive4 from "@/components/directive4/directive";
import vImage from "@/components/vImage/vImage";
import vResize from "@/components/vResize/vResize";
import drag1 from "@/components/drag1/drag";
import drag2 from "@/components/drag2/drag";
import render1 from "@/components/render1/render";
import render2 from "@/components/render2/render";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/slot1",
      name: "slot1",
      component: slot1
    },
    {
      path: "/slot2",
      name: "slot2",
      component: slot2
    },
    {
      path: "/slot3",
      name: "slot3",
      component: slot3
    },
    {
      path: "/directive1",
      name: "directive1",
      component: directive1
    },
    {
      path: "/directive2",
      name: "directive2",
      component: directive2
    },
    {
      path: "/directive3",
      name: "directive3",
      component: directive3
    },
    {
      path: "/directive4",
      name: "directive4",
      component: directive4
    },
    {
      path: "/vImage",
      name: "vImage",
      component: vImage
    },
    {
      path: "/vResize",
      name: "vResize",
      component: vResize
    },
    {
      path: "/drag1",
      name: "drag1",
      component: drag1
    },
    {
      path: "/drag2",
      name: "drag2",
      component: drag2
    },
    {
      path: "/render1",
      name: "render1",
      component: render1
    },
    {
      path: "/render2",
      name: "render2",
      component: render2
    }
  ]
})
