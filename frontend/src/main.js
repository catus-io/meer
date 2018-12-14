import Vue from 'vue'
import App from '@/App.vue'
import router from '@/config/router'
import store from '@/vuex/store'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUserAlt, faKey } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faUserAlt, faKey)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
