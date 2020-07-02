// ========================================
// IMPORTS CORE APP
// ========================================
import Vue from 'vue'
import router from '@/router/router'
import store from '@/store/store'

// ========================================
// IMPORT POLYFILLS
// ========================================
import '@babel/polyfill'
import 'mutationobserver-shim'

// ========================================
// IMPORT PLUGINGS
// ========================================
import '@/plugins/bootstrap-vue'

// ========================================
// IMPORT MAIN COMPONENT
// ========================================
import App from '@/App.vue'

// vue config
Vue.config.productionTip = false

// ========================================
// INIT VUE APP
// ========================================
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
