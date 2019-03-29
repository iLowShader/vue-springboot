import Vue from "vue"
import Router from "vue-router"
import ListBiblioteca from "./components/ListBiblioteca.vue"
import AddBiblioteca from "./components/AddBiblioteca.vue"
import Biblioteca from "./components/Biblioteca.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "bibliotecas",
        alias: "/biblioteca",
        component: ListBiblioteca,
        children: [
          {
            path: "/biblioteca/:id",
            name: "biblioteca-details",
            component: Biblioteca,
            props: true
          }
        ]
      },
      {
        path: "/add",
        name: "add",
        component: AddBiblioteca
      }
    ]
  });