import Vue from 'vue';

// components
import UIButton from '../components/UI/UI-Button.vue';
import UIModal from '../components/UI/UI-Modal.vue';

// use
const uiKit = () => {
  Vue.component('UIButton', UIButton);
  Vue.component('UIModal', UIModal);
};

export default uiKit;
