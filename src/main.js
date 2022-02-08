import EvaIcons from 'vue-eva-icons';
import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import uiKit from './plugins/ui-kit';

Vue.config.productionTip = false;
Vue.use(EvaIcons);
Vue.use(uiKit);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
