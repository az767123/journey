import Vue from "vue"
import Router from "vue-router"

const Home = () => import("views/home")
const HomeCity = () => import("views/homecity")

Vue.use(Router)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/homecity",
    component:HomeCity
  }
    ]

const router = new Router({
  routes,
  mode:"history"
})

export default router