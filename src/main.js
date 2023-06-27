import { createApp } from 'vue';
import store from '../src/store/store';
import App from './App.vue';
import './scss/reset.scss';

const app = createApp(App);
app.use(store);
app.mount('#app');

