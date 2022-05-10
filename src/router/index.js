import Vue from "vue";
import VueRouter from "vue-router";
import PaginaHome from "../views/PaginaHome.vue";
import PaginaContato from "../views/PaginaContato.vue";
import PaginaCursos from "../views/PaginaCursos.vue";
import PaginaCurso from "../views/PaginaCurso.vue";
import PaginaAula from "../views/PaginaAula.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: PaginaHome,
    },
    {
      path: "/contato",
      name: "contato",
      component: PaginaContato,
    },
    {
      path: "/cursos",
      name: "cursos",
      component: PaginaCursos,
    },
    {
      path: "/cursos/:curso",
      name: "curso",
      component: PaginaCurso,
      props: true,
      children: [
        {
          path: "/cursos/:curso/:aula",
          name: "aula",
          component: PaginaAula,
          props: true,
        },
      ],
    },
  ],
});
