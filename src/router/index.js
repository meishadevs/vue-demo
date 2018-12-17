import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import slot1 from "@/components/slot1/Slot";
import slot2 from "@/components/slot2/Slot";
import slot3 from "@/components/slot3/Slot";

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
  ]
})
