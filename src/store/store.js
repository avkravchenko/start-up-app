import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isBurgerClicked: false,
    };
  },
  mutations: {
    SET_BURGER_CLICKED(state, value) {
      state.isBurgerClicked = value;
    },
  },
  actions: {
    setBurgerClicked({ commit }, value) {
      commit('SET_BURGER_CLICKED', value);
    },
  },
  getters: {
    isBurgerClicked(state) {
      return state.isBurgerClicked;
    },
  },
});

export default store;
