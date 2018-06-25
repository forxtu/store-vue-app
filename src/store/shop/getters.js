// export const getters = {
//     getProducts (state) {
//         return state.products
//     },
//     getAttributes (state) {
//         return state.attributes
//     },
//     getAttributesIdValue (state) {
//         return state.attributesIdValue['.value']
//     }
//     getTotalPriceCart (state) {
//         // let total = 0
//         for (let item of state.cart) {
//             state.totalPrice += item.totalPriceOfItem
//         }
//         return state.totalPrice.toFixed(2)
//     }
//     getTotalPrice: (state) => (whichStore) => {
//         return whichStore.reduce((total, product) => {
//             switch (whichStore) {
//             case state.cart:
//                 return total + product.price.value * product.addedQuantity
//             case state.wishlist:
//                 return total + product.price.value * product.addedQuantityWishlist
//             default:
//                 return 0
//             }
//         }, 0)
//     }
//     getValues (state, getters) {
//         // var totalArr = []
//         getters.getAttributesIdValue.map((value, idIndex) => {
//             getters.getAttributes.map((item, attrIndex) => {
//                 if (item.id === idIndex) {
//                     // var arr = []
//                     value.split(/\|/).forEach(function (val, splittedIndex) {
//                         state.midValuesArr.push(val)
//                         return state.midValuesArr
//                     })
//                     state.finalValuesArr.push(state.midValuesArr)
//                 }
//             })
//         })
//         return state.finalValuesArr
//     },
//     getNumbers (state, getters) {
//         // console.log(getters.getProducts[0].attributes)
//         getters.getProducts.map(product => {
//             // let totalArrAttr = []
//             product.attributes.map((item, index) => {
//                 // let arr = []
//                 item.split(/\|/).forEach(function (val, splittedIndex) {
//                     state.midNumbersArr.push(parseInt(val))
//                     return state.midNumbersArr
//                 })
//                 state.finalNumbersArr.push(state.midNumbersArr)
//             })
//             return state.finalNumbersArr
//         })
//     },
//     getResult (state, getters) {
//         // let finalRes = []
//         this.getNumbers.map((number, indexNumber) => {
//             // let newRes = [];
//             this.getValues.filter((item, index) => {
//                 if (index === indexNumber) {
//                     // let middleRes = [];
//                     item.map((itemMap, itemMapIndex) => {
//                         number.map((numberItem) => {
//                             if (numberItem === itemMapIndex + 1) {
//                                 state.midResArr.push(itemMap)
//                                 return state.midResArr
//                             }
//                         })
//                     })
//                 }
//                 return state.midResArr
//             })
//             return state.finalResArr.push(state.midResArr)
//         })
//         return state.finalResArr
//     }
// }
