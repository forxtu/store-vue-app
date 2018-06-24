import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './state'
import { mutations } from './mutations'
// import products from './shop/modules/products'
import { getters } from './shop/getters'
import { actions } from './shop/actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // modules: {
    //     products
    // },
    state,
    mutations,
    getters,
    actions
})
