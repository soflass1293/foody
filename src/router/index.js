import { createRouter, createWebHashHistory } from "vue-router";
import Order from "../views/order.vue";
import NewOrder from "@/views/new-order.vue";

const routes = [
  {
    path: "/orders",
    name: "Order",
    component: Order,
  },
  {
    path: "/orders/new",
    name: "New Order",
    component: NewOrder,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
