import {createApp} from 'vue'
import App from './gui/App.vue'
import router from './gui/router'
import store from './gui/store'
import ElementPlus from 'element-plus';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
