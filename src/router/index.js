import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld";
import People from "../components/People";
import RangeInput from "../components/RangeInput";
import MenDescription from "../components/MenDescription";
import MenCreate from "../components/MenCreate";

const routes = [
   {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
   },
   {
      path: "/People",
      name: "People",
      component: People,
   },
   {
      path: "/People/MenDescription",
      name: "MenDescription",
      component: MenDescription,
   },
   {
      path: "/People/MenCreate",
      name: "MenCreate",
      component: MenCreate,
   },
   {
      path: "/RangeInput",
      name: "RangeInput",
      component: RangeInput,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;