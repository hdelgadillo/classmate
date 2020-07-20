import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from '../views/page.vue'


Vue.use(VueRouter)

const Home = {
  template: "<h1>hola</h1>",
  data: () => ({
    sparklineData: [
      423,
      446,
      675,
      510,
      590,
      610,
      423,
    ],
  }),
}

const Page = {
  template: '<div>Attractions</div>'
}



  const routes = [
  {path: '/',component:() => import( '../views/page.vue')},
  { path:'/calendario', component:() => import( '../views/Calendar.vue')},
  { path:'/estadisticas', component:() => import( '../views/Estadisticas.vue')}, 
  { path:'/examenes', component: Page },
  { path:'/historial', component: Page },
  { path:'/administrar', component:() => import( '../views/admin.vue')},
  { path:'/administrar/alumnos', component:() => import( '../views/viewAlumnos.vue')},
  { path:'/ayuda', component: Page },
 
]

const router = new VueRouter({
  routes
})

export default router
