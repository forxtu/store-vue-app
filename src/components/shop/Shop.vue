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
import ProductsList from './Products/ProductsList'
import Cart from './ShoppingStates/Cart'
import Wishlist from './ShoppingStates/Wishlist'

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
}
</script>

<style scoped>

</style>
