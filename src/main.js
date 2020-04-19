import Vue from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify'
// components
import AppHeader from './components/AppHeader'

import './assets/css/styles.css'
import './assets/css/components.css'

Vue.config.productionTip = false

Vue.component('app-header', AppHeader)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
