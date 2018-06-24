import { firebaseAction } from 'vuexfire'

export const actions = {
    setProductsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('products', ref)
    }),
    setAttributesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('attributes', ref)
    }),
    setAttributesIdValueRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('attributesIdValue', ref)
    }),
    addToCart ({ commit }, product) {
        commit('ADD_TO_CART', product)
    },
    removeFromCart ({ commit }, product) {
        commit('REMOVE_FROM_CART', product)
    },
    addToWishlist ({ commit }, product) {
        commit('ADD_TO_WISHLIST', product)
    },
    removeFromWishlist ({ commit }, product) {
        commit('REMOVE_FROM_WISHLIST', product)
    },
    moveToCart ({ commit }, product) {
        commit('ADD_TO_CART', product)
        commit('REMOVE_FROM_WISHLIST', product)
    }
}
