import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    solutionIndex: 0
  },

  getters: {},
  mutations: {
    increaseSolutionIndex(state) {
      state.solutionIndex++;
            if(state.solutionIndex == 20){
                state.solutionIndex = 0;
            }
      console.log("increase solution index: " + state.solutionIndex);
    },
    decreaseSolutionIndex(state) {
      state.solutionIndex--;
            if(state.solutionIndex == -1){
                state.solutionIndex = 19;
            } 
      console.log("decrease solution index: " + state.solutionIndex);
    },
    setSolutionIndex(state, newIndex) {
      state.solutionIndex = newIndex;
      console.log("set solution index: " + state.solutionIndex);
    }

  },
  actions: {},
  modules: {},
});
