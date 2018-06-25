<template>
    <v-layout layout row wrap>
        <v-flex class="product__wrapper" 
                flex xs12 sm6 md6 lg6 
                v-for="product of products"
                :key="product.name"
            >
            <div class="product">
                <div class="product__image">
                    <img :src="`../../../static/products/${product.image}`" alt="">
                </div>
                <div class="product__head">
                    <h3 class="headline mb-0">{{product.name}}</h3>
                    <h4>Price: {{product.price.value}}</h4>
                </div>
                <div class="product__attributes">
                    <div class="product__attributes">
                        <div>
                            <p class="product__attributes-type" 
                                v-for="attribute of getAttributes"
                                :key="attribute.id"
                            >
                                {{attribute.name}}
                            </p>
                        </div>
                        <div class="product__attributes-text">
                            <product-attributes :product="product"></product-attributes>
                        </div>
                    </div>
                </div>
                <div class="product__controls">
                    <v-btn flat color="green" @click="addToCart(product)">Add to cart</v-btn>
                    <v-btn flat color="blue" @click="addToWishlist(product)">Add to wishlist</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import { productsRef, attributesRef, attributesIdValueRef } from '../../../../config/firebase'
import ProductAttributes from './ProductAttributes'

export default {
    name: 'ProductsList',
    components: {
        ProductAttributes
    },
    data () {
        return {}
    },
    computed: {
        ...mapState('products', {
            products: state => state.products
        }),
        ...mapGetters('products', [
            'getAttributes',
            'getAttributesIdValue',
            'getValues'
        ])
    },
    methods: {
        ...mapActions('products', [
            'setProductsRef',
            'setAttributesRef',
            'setAttributesIdValueRef'
        ]),
        addToCart(product) {
            this.$store.dispatch('cart/addToCart', product)
        },
        addToWishlist(product) {
            this.$store.dispatch('wishlist/addToWishlist', product)
        }
    },
    created () {
        this.setProductsRef(productsRef)
        this.setAttributesRef(attributesRef)
        this.setAttributesIdValueRef(attributesIdValueRef)
    }
}
</script>

<style scoped>
.product {
    padding: 20px;
    background-color: #424242;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 2px;
}
.product__wrapper {
    padding: 4px;
}
.product__attributes {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
}
</style>
