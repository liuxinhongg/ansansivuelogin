// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
window.bus = new Vue();
import '../static/animate.css/animate.min.css'
import '../static/bootstrap/dist/css/bootstrap.css'
import '../static/bootstrap/dist/css/bootstrap-datetimepicker.css'
import '../static/bootstrap/dist/js/bootstrap.min'
import '../static/bootstrap/dist/js/bootstrap-datetimepicker'
import '../static/bootstrap/dist/js/bootstrap-datetimepicker.zh-CN'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
window.bus = new Vue();
import Login from './Login'
import Main from './components/Main'
import project from './components/projectManagement/project/index'
import ConstructionUnit from './components/projectManagement/ConstructionUnit/index'
import ProjectPersonnel from './components/projectManagement/ProjectPersonnel/index'
import OrganizationStructure from './components/BasicInformation/OrganizationStructure/index'
import RoleManagement from './components/SystemManagement/RoleManagement/index'
import UserManagement from './components/SystemManagement/UserManagement/index'
import index from './components/BasicInformation/BusinessManagement/index'
import list from './components/BasicInformation/BusinessManagement/list'
import EmployeeManagement from './components/BasicInformation/EmployeeManagement/index'
import BlacklistEnterprises from './components/LacklistManagement/BlacklistEnterprises/index'
import BlacklistWorkers from './components/LacklistManagement/BlacklistWorkers/index'
import Averagewage from './components/BasicInformation/Averagewage/index'
import Groupblacklist from './components/LacklistManagement/Groupblacklist/index'
import QualificationManagement from'./components/BasicInformation/QualificationManagement/index'
import Distpicker from 'v-distpicker'



import '../static/zTree_v3/css/zTreeStyle/zTreeStyle.css'
//import '../../static/zTree_v3/js/jquery-1.4.4.min
import '../static/zTree_v3/js/jquery.ztree.core.min'
import '../static/zTree_v3/js/jquery.ztree.excheck.min'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.prototype.$echarts = echarts
Vue.component('v-distpicker', Distpicker)
axios.defaults.withCredentials=true;

const router = new VueRouter({
  routes: [
    {
    	name:'login', 
    	path:'/', 
    	component: Login
    },
    {
      name:'main',
      path:'/Main',
      component: Main,
      children: [
        {
          name:'project',
          path:'/projectManagement/project/index',
          component: project,
        },
        {
          name:'ConstructionUnit',
          path:'/projectManagement/ConstructionUnit/index',
          component: ConstructionUnit,
        },
        {
          name:'ProjectPersonnel',
          path:'/projectManagement/ProjectPersonnel/index',
          component: ProjectPersonnel,
        },
    
        {
          name:'OrganizationStructure',
          path:'/BasicInformation/OrganizationStructure/index',
          component: OrganizationStructure,
        },
        {
          name:'RoleManagement',
          path:'/SystemManagement/RoleManagement/index',
          component: RoleManagement,
        },
        {
          name:'UserManagement',
          path:'/SystemManagement/UserManagement/index',
          component: UserManagement,
        },
        {
          name:'index',
          path:'/BasicInformation/BusinessManagement/index',
          component: index,
        },
        {
          name:'list',
          path:'/BasicInformation/BusinessManagement/list',
          component: list,
        },
        {
          name:'EmployeeManagement',
          path:'/BasicInformation/EmployeeManagement/index',
          component: EmployeeManagement,
        },
        {
          name:'BlacklistEnterprises',
          path:'/LacklistManagement/BlacklistEnterprises/index',
          component: BlacklistEnterprises,
        },
        {
          name:'BlacklistWorkers',
          path:'/LacklistManagement/BlacklistWorkers/index',
          component: BlacklistWorkers,
        },
        {
          name:'Averagewage',
          path:'/BasicInformation/Averagewage/index',
          component: Averagewage,
        },
        {
          name:'Groupblacklist',
          path:'/BasicInformation/Groupblacklist/index',
          component: Groupblacklist,
        },
        {
          name:'QualificationManagement',
          path:'/BasicInformation/QualificationManagement/index',
          component: QualificationManagement,
        },

      ]
    },
   
    
  ],
  mode: 'hash'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
