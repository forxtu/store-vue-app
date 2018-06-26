import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './shop/state'
import { mutations } from './shop/mutations'

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
    state,
    mutations
})
