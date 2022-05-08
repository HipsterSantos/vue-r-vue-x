import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName:'',
    password:'',
    email:''
  },
  getters: {
    getOne:(predicate)=>{
      return this.state[predicate];
    }
  },
  mutations: {
    setOne(predicate,value){
      this.state[predicate] = value;
    }
  },
  actions: {
    clearOne(predicate){
      this.state[predicate] = "";
    }
  },
  modules: {

  }
})

global.$store = store;

export default store;
