import { firebaseMutations, firebaseAction } from 'vuexfire'

const state = {
    products: [],
    attributes: [],
    attributesIdValue: {},
    midValuesArr: [],
    finalValuesArr: [],
    midNumbersArr: [],
    finalNumbersArr: [],
    midResArr: [],
    finalResArr: []
}

const getters = {
    getProducts: state => state.products,
    getAttributes: state => state.attributes,
    getAttributesIdValue: state => state.attributesIdValue['.value']
    // getValues (state, getters) {
    //     let totalArr = []
    //     getters.getAttributesIdValue.map((value, idIndex) => {
    //         getters.getAttributes.map((item, attrIndex) => {
    //             if (item.id === idIndex) {
    //                 // let arr = []
    //                 value.split(/\|/).forEach(function (val, splittedIndex) {
    //                     state.midValuesArr.push(val)
    //                     return state.midValuesArr
    //                 })
    //                 state.finalValuesArr.push(state.midValuesArr)
    //             }
    //         })
    //     })
    //     return state.finalValuesArr
    // },
    // getNumbers (state, getters) {
    //     // console.log(getters.getProducts[0].attributes)
    //     getters.getProducts.map(product => {
    //         // let totalArrAttr = []
    //         product.attributes.map((item, index) => {
    //             // let arr = []
    //             item.split(/\|/).forEach(function (val, splittedIndex) {
    //                 state.midNumbersArr.push(parseInt(val))
    //                 return state.midNumbersArr
    //             })
    //             state.finalNumbersArr.push(state.midNumbersArr)
    //         })
    //         return state.finalNumbersArr
    //     })
    // },
    // getResult (state, getters) {
    //     // let finalRes = []
    //     getters.getNumbers.map((number, indexNumber) => {
    //         // let newRes = [];
    //         getters.getValues.filter((item, index) => {
    //             if (index === indexNumber) {
    //                 // let middleRes = [];
    //                 item.map((itemMap, itemMapIndex) => {
    //                     number.map((numberItem) => {
    //                         if (numberItem === itemMapIndex + 1) {
    //                             state.midResArr.push(itemMap)
    //                             return state.midResArr
    //                         }
    //                     })
    //                 })
    //             }
    //             return state.midResArr
    //         })
    //         return state.finalResArr.push(state.midResArr)
    //     })
    //     return state.finalResArr
    // }
}

const mutations = {
    ...firebaseMutations
}

const actions = {
    setProductsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('products', ref)
    }),
    setAttributesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('attributes', ref)
    }),
    setAttributesIdValueRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('attributesIdValue', ref)
    })
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
