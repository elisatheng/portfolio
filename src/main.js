import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import AppHeader from './components/AppHeader.vue'
import AboutMe from './components/AboutMe.vue'
import Course from './components/Course.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Hobbies from './components/Hobbies.vue'
import Contact from './components/Contact.vue'
import AppFooter from './components/AppFooter.vue'

import './assets/css/styles.css'
import './assets/css/components.css'

const app = createApp(App)

app.use(vuetify)

app.component('app-header', AppHeader)
app.component('about-me', AboutMe)
app.component('course', Course)
app.component('projects', Projects)
app.component('skills', Skills)
app.component('hobbies', Hobbies)
app.component('contact', Contact)
app.component('app-footer', AppFooter)

app.mount('#app')
