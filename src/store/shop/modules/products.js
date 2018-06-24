import Vue from 'vue'
import { firebaseMutations } from 'vuexfire'

const state = {
    products: [],
    attributes: [],
    attributesIdValue: [],
    cart: [],
    cartCount: 0,
    totalPrice: 0
}

const mutations = {
    ...firebaseMutations,
    addToCart (state, product) {
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
    removeFromCart (state, product) {
        let index = state.cart.indexOf(product)
        if (index > -1) {
            let item = state.cart[index]
            state.cartCount -= item.addedQuantity
            state.cart.splice(index, 1)
        }
    }
}

export default {
    state,
    mutations
}
