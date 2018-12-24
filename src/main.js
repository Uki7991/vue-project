import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'es6-promise'
import Vuex from 'vuex'
import store from './Vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

