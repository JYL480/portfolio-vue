import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLink, faPerson,faDiagramProject,faIcons,faStar,faSchool } from '@fortawesome/free-solid-svg-icons'
import {faVuejs,faPython,faJs, faHtml5,faCss3}  from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faLink,faVuejs,faPython,faJs, faHtml5,faCss3,faPerson,faDiagramProject,faIcons,faStar,faSchool)


const app = createApp(App)
app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')