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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
            'getAttributesIdValue',
            // 'getValues',
            // 'getNumbers',
            // 'getResult'
        ]),
        getValues () {
            var totalArr = [];
                this.getAttributesIdValue.map((value, idIndex) => {
                    this.getAttributes.map((item, attrIndex) => {
                        if (item.id == idIndex) {
                            var arr = [];
                            value.split(/\|/).forEach(function (val, splittedIndex) {
                                arr.push(val)
                                return arr
                            })
                            totalArr.push(arr)
                        }
                    })
                })
            return totalArr
        },
        getNumbers () {
            let totalArrAttr = [];
            this.product.attributes.map((item, index) => {
                let arr = [];
                item.split(/\|/).forEach(function (val, splittedIndex) {
                    arr.push(parseInt(val))
                    return arr
                })
                totalArrAttr.push(arr)
            });
            return totalArrAttr
        },
        getResult () {
            let finalRes = []
            this.getNumbers.map((number, indexNumber) => {
                let newRes = [];
                this.getValues.filter((item, index) => {
                    if(index == indexNumber) {
                        let middleRes = [];
                        item.map((itemMap, itemMapIndex) => {
                            number.map((numberItem) => {
                                if(numberItem == itemMapIndex + 1)
                                newRes.push(itemMap);
                                return newRes
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
