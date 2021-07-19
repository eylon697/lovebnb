import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/style/style.scss'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale })

import * as VueGoogleMaps from 'vue2-google-maps';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDyKytLc6HSBg15d2n3erx3dlTpxi4Xci8',
        libraries: 'places',
        region: 'EN',
        language: 'en',
    },
});



Vue.use(ElementUI, { locale })

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')