import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        menu: [],
    },
    getters: {
        count: state => state.count,
        menus: state => state.menu
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        pullMenu: (state, res) => state.menu = res.data
    },
    actions: {
        fetchMenu: (context, res) => context.commit('pullMenu', res)
    }
});