<template>
    <div>
        <p v-for="attributesResult of getResult"
                :key="attributesResult.toString()"
            >
            <span v-for="attributesResultItem of attributesResult"
                :key="attributesResultItem"
            >
                {{attributesResultItem}}
            </span>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductAttributes',
    data () {
        return {}
    },
    props: {
        product: {
            type: Object
        }
    },
    computed: {
        ...mapGetters('products', [
            'getAttributes',
            'getAttributesIdValue'
            // 'getValues',
            // 'getNumbers',
            // 'getResult'
        ]),
        getValues () {
            let totalArr = []
                this.getAttributesIdValue.map((value, valueIndex) => {
                    this.getAttributes.map((attr, attrIndex) => {
                        if (attr.id === valueIndex) {
                            let arr = []
                            value.split(/\|/).forEach(function (splittedValue, splittedIndex) {
                                arr.push(splittedValue)
                                return arr
                            })
                            totalArr.push(arr)
                        }
                    })
                })
            return totalArr
        },
        getNumbers () {
            let totalArrAttr = []
            this.product.attributes.map(number => {
                let arr = []
                number.split(/\|/).forEach(function (splittedNumber) {
                    arr.push(parseInt(splittedNumber))
                    return arr
                })
                totalArrAttr.push(arr)
            })
            return totalArrAttr
        },
        getResult () {
            let finalRes = []
            this.getNumbers.map((number, numberIndex) => {
                let newRes = []
                this.getValues.filter((value, valueIndex) => {
                    if(valueIndex == numberIndex) {
                        value.map((valueItem, valueItemIndex) => {
                            number.map((numberItem) => {
                                if (numberItem === valueItemIndex + 1) {
                                    newRes.push(valueItem)
                                    return newRes
                                }
                            })
                        })
                    }
                    return newRes
                })
                return finalRes.push(newRes)
            })
            return finalRes
        }
    }
}
</script>

<style scoped>

</style>
