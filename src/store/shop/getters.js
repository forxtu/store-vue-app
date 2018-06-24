export const getters = {
    // getProducts: state => state.products,
    // getAttributes: state => state.attributes,
    // getAttributesIdValue: state => state.attributesIdValue,
    getProducts (state) {
        return state.products
    },
    getAttributes (state) {
        return state.attributes
    },
    getAttributesIdValue (state) {
        return state.attributesIdValue
    },
    getTotalPrice (state) {
        // let total = 0
        for (let item of state.cart) {
            state.totalPrice += item.totalPriceOfItem
        }
        return state.totalPrice.toFixed(2)
    }
}
