import Vue from 'vue'
import Vuex from 'vuex'

// import { state } from './shop/state'
import { getters } from './shop/getters'
import { mutations } from './shop/mutations'
// import { actions } from './shop/actions'

import products from './shop/modules/products'
import wishlist from './shop/modules/wishlist'
import cart from './shop/modules/cart'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        products,
        cart,
        wishlist
    },
    // state,
    getters,
    mutations
    // actions
})
