import { createStore } from 'vuex';

const store = createStore({
  state: {
    screenWidth: window.innerWidth,
  },
  getters: {
    getScreenWidth(state) {
      return state.screenWidth;
    },
  },
});

export default store;