<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout wrap>
                <cart />
                <wishlist />
                <products-list />
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

import ProductsList from './Products/ProductsList'
import Cart from './ShoppingStates/Cart'
import Wishlist from './ShoppingStates/Wishlist'
// import { db } from "../../../config/firebase"
// import { productsRef, attributesRef, attributesIdValueRef } from '../../../config/firebase'

export default {
    name: 'Shop',
    components: {
        ProductsList,
        Cart,
        Wishlist
    },
    data () {
        return {}
    }
    // computed: {
    //     ...mapGetters([
    //         'getProducts',
    //         'getAttributes',
    //         'getAttributesIdValue'
    //     ]),
    // },
    // methods: {
    //     ...mapActions([
    //         'setProductsRef',
    //         'setAttributesRef',
    //         'setAttributesIdValueRef'
    //     ])
    // },
    // mounted() {
    //     // this.$store.dispatch('setProductsRef', productsRef)
    //     this.setProductsRef(productsRef);
    //     this.setAttributesRef(attributesRef);
    //     this.setAttributesIdValueRef(attributesIdValueRef);
    // }
}
</script>

<style scoped>

</style>
