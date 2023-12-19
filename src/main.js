import { createApp } from 'vue';
import '../src/assets/scss/style.scss';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Fontawesome Icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faUser, faFolder, faComments, faTwitter, faChevronLeft, faChevronRight, faChevronUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
