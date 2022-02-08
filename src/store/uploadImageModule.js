import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    imagesForLoad: [],
    isLoading: false,
  },
  getters: {
    getLoadingStatus: (state) => state.isLoading,
  },
  mutations: {
    setImages: (state, value) => { state.imagesForLoad = value; },
    setLoading: (state, value) => { state.isLoading = value; },
  },
  actions: {
    uploadImages({ commit }) {
      commit('setLoading', true);

      // примерно так может выглядеть запрос
      // return axios.post(`blabla.ru/server/users/${userdata}}`)
      //   .then(() => {
      //     commit('setImages', []);
      //     commit('setLoading', false);
      //     return Promise.resolve();
      //   })
      //   .catch((error) => {
      //     commit('setLoading', false);
      //     return Promise.reject(error);
      //   });

      const random = (Math.random() > 0.5) ? 1 : 0;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (random) {
            commit('setImages', []);
            commit('setLoading', false);
            resolve();
          }
          commit('setLoading', false);
          reject();
        }, 2000);
      });
    },
  },
};
