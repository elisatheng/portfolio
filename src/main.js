import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import InfoCard from 'vue-info-card'

import AppHeader from './components/AppHeader'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Course from './components/Course'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import AppFooter from './components/AppFooter'

import './assets/css/app.css'
import './assets/css/portfolio.css'

Vue.config.productionTip = false

Vue.component('flip-card', InfoCard)
Vue.component('app-header', AppHeader)
Vue.component('banner', Banner)
Vue.component('about-me', AboutMe)
Vue.component('course', Course)
Vue.component('projects', Projects)
Vue.component('skills', Skills)
Vue.component('hobbies', Hobbies)
Vue.component('app-footer', AppFooter)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
