import Vue from 'vue'

const state = {
    cart: [],
    cartCount: 0
}

const getters = {
    getTotalPriceCart: (state) => (whichStore) => {
        return whichStore.reduce((total, product) => {
            switch (whichStore) {
            case state.cart:
                return total + product.price.value * product.addedQuantity
            case state.wishlist:
                return total + product.price.value * product.addedQuantityWishlist
            default:
                return 0
            }
        }, 0)
    }
}

const mutations = {
    ADD_TO_CART (state, product) {
        let found = state.cart.find(item => item.sku === product.sku)

        if (found) {
            found.addedQuantity ++
            found.totalPriceOfItem = found.addedQuantity * found.price.value
        } else {
            state.cart.push(product)

            Vue.set(product, 'addedQuantity', 1)
            Vue.set(product, 'totalPriceOfItem', product.price.value)
        }

        state.cartCount++
    },
    REMOVE_FROM_CART (state, product) {
        let index = state.cart.indexOf(product)
        if (index > -1) {
            let item = state.cart[index]
            state.cartCount--
            item.addedQuantity--
            item.totalPriceOfItem = item.addedQuantity * item.price.value
            if (item.addedQuantity < 1) {
                state.cart.splice(index, 1)
            }
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
    addToCart ({ commit }, product) {
        commit('ADD_TO_CART', product)
    },
    removeFromCart ({ commit }, product) {
        commit('REMOVE_FROM_CART', product)
    },
    moveToCart ({ commit }, product) {
        commit('MOVE_TO_CART', product)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
