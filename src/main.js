import Vue from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify'
// components
import AppHeader from './components/AppHeader'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Course from './components/Course'
import Skills from './components/Skills'

import './assets/css/styles.css'
import './assets/css/components.css'

Vue.config.productionTip = false

Vue.component('app-header', AppHeader)
Vue.component('banner', Banner)
Vue.component('about-me', AboutMe)
Vue.component('course', Course)
Vue.component('skills', Skills)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
