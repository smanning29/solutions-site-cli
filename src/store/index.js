import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state contains any data which needs to be accessed by multiple components
    solutionIndex: 0
  },

  getters: {
    // getters are exactly like "computed", but for global state.
  },
  mutations: {
    // mutations are synchronous changes to the state. they don't need to wait for anything in order to run.
    increaseSolutionIndex(state) {
      state.solutionIndex++;
            if(state.solutionIndex == 20){
                state.solutionIndex = 0;
            }
      console.log("increase solution index: "+state.solutionIndex);
    },
    decreaseSolutionIndex(state) {
      state.solutionIndex--;
            if(state.solutionIndex == -1){
                state.solutionIndex = 19;
            } 
      console.log("decrease solution index: "+state.solutionIndex);
    },

  },
  actions: {
    // actions are mutations that require async operations, like reaching out to an API, setTimeout operations, or promises.

  },
  modules: {},
});
