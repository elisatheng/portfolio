import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import InfoCard from 'vue-info-card'
import '@/assets/css/app.css'
import '@/assets/css/portfolio.css'

Vue.config.productionTip = false

Vue.component('flip-card', InfoCard)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
