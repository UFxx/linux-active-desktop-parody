import { createApp } from 'vue'
import App from './App.vue'
import '../style.scss';

import Icon from './ui/Icon.vue';

const app = createApp(App)

app.component('ui-icon', Icon);

app.mount('#app')
