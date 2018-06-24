import Vue from 'vue'
import { firebaseMutations } from 'vuexfire'

export const mutations = {
    ...firebaseMutations,
    // addToTheCart (state, productSku) {
    //     const product = state.products.find(product => {
    //         product.sku = productSku
    //     })
    //     product.addedToCart = true
    //     const addedProduct = {
    //         productSku: productSku
    //     }
    //     state.cart.push(addedProduct)
    // },
    // removeFromCart (state, productSku) {
    //     const product = state.products.find(product => {
    //         product.sku = productSku
    //     })
    //     product.addedToCart = false
    //     const addedProduct = state.addedProduct.find(addedProduct => {
    //         return addedProduct.productSku === productSku
    //     })
    //     state.cart.splice(state.cart.indexOf(addedProduct), 1)
    // }
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
            state.cartCount -= item.addedQuantity
            state.cart.splice(index, 1)
        }
    },
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
    }
}
