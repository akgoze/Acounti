import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import AppButton from "./components/UI/AppButton.vue";
import AppInput from "./components/UI/AppInput.vue";

const app = createApp(App);

app.mount('#app');
app.component('app-button', AppButton);
app.component('app-input', AppInput);
