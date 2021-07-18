import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/style/style.scss'
import Element from 'element-ui'
Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'
import * as VueGoogleMaps from 'vue2-google-maps';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDyKytLc6HSBg15d2n3erx3dlTpxi4Xci8',
        libraries: 'places',
    },
});


Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')