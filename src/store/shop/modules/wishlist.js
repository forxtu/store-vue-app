import Vue from 'vue'

const state = {
    wishlist: [],
    wishlistCount: 0
}

const getters = {
    getTotalPriceWishlist: (state) => (whichStore) => {
        return whichStore.reduce((total, product) => {
            return total + product.price.value * product.addedQuantityWishlist
        }, 0)
    }
}

const mutations = {
    ADD_TO_WISHLIST (state, product) {
        let found = state.wishlist.find(item => item.sku === product.sku)

        if (found) {
            found.addedQuantityWishlist ++
            found.totalPriceOfItemWishlist = found.addedQuantityWishlist * found.price.value
        } else {
            state.wishlist.push(product)

            Vue.set(product, 'addedQuantityWishlist', 1)
            Vue.set(product, 'totalPriceOfItemWishlist', product.price.value)
        }

        state.wishlistCount++
    },
    REMOVE_FROM_WISHLIST (state, product) {
        let index = state.wishlist.indexOf(product)
        if (index > -1) {
            let item = state.wishlist[index]
            state.wishlistCount -= item.addedQuantityWishlist
            state.wishlist.splice(index, 1)
        }
    },
    MOVE_TO_CART (state, product) {
        let found = state.cart.find(item => item.sku === product.sku)

        if (found) {
            found.addedQuantity += product.addedQuantityWishlist
            found.totalPriceOfItem = found.addedQuantity * found.price.value
        } else {
            state.cart.push(product)

            Vue.set(product, 'addedQuantity', product.addedQuantityWishlist)
            Vue.set(product, 'totalPriceOfItem', product.price.value * product.addedQuantityWishlist)
        }

        state.cartCount += product.addedQuantityWishlist
    }
}

const actions = {
    addToWishlist ({ commit }, product) {
        commit('ADD_TO_WISHLIST', product)
    },
    removeFromWishlist ({ commit }, product) {
        commit('REMOVE_FROM_WISHLIST', product)
    },
    moveToCart ({ commit }, product) {
        commit('MOVE_TO_CART', product)
        commit('REMOVE_FROM_WISHLIST', product)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
