import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';
Vue.use(Vuex);
// import dialog from './modules/dialog';
// import dialogTab from './modules/dialogTab';

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
})