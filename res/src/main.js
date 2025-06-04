import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ResHome from './views/ResHome'
import BigHome from './views/BigHome'
import ResMenu from './views/ResMenu'
import ResBranch from './views/ResBranch'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'
import './assets/global.css'
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter(
  {
    routes:[
      {path:'/',
      component: BigHome,
      children:[
        {path:'/home',component:ResHome},
        {path:'/menu',component:ResMenu},
        {path:'/branch',component:ResBranch},
        {path:'/aboutus',component:AboutUs},
        {path:'/contactus',component:ContactUs}
      ]
      },
      
      
      
   ]
  }
)

new Vue({
   router:router,
  render: h => h(App),
 
}).$mount('#app')
