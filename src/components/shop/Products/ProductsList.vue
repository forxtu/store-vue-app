<template>
    <!-- <div v-for="product of getProducts">
        <img :src="product.image" alt="product" class="mb-5">
    </div> -->
    <!-- {{getProducts}} -->
    <!-- {{getAttributes}} -->
    <!-- {{getAttributesIdValue}} -->
    <v-layout layout row wrap>
        <v-flex class="product__wrapper" flex xs12 sm6 md3 v-for="product of getProducts">
            <div class="product">
                <div class="product__image">
                    <img :src="'../../../static/products/'+product.image" alt="">
                </div>
                <div class="product__head">
                    <h3 class="headline mb-0">{{product.name}}</h3>
                    <h4>Price: {{product.price.value}}</h4>
                </div>
                <div class="product__attributes">
                    <div class="product__attributes">
                        <p class="product__attributes-type" v-for="attribute of getAttributes">{{attribute.name}}</p>
                        <p class="product__attributes-text" v-for="(attributeIdValue, index) of getAttributesIdValue">
                            <!-- {{index}} -->
                            <!-- <span v-for="attribute of getAttributes"> -->
                                <!-- {{attribute}} -->
                                <span>{{attributeIdValue}}</span>
                            <!-- </span> -->
                        </p>
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
import { mapGetters, mapMutations, mapActions } from 'vuex'

// import { db } from "../../../config/firebase"
import { productsRef, attributesRef, attributesIdValueRef } from '../../../../config/firebase'

export default {
    name: 'ProductsList',
    data () {
        return {}
    },
    computed: {
        ...mapGetters([
            'getProducts',
            'getAttributes',
            'getAttributesIdValue'
        ])
    },
    methods: {
        // ...mapMutations([
        //     'addToCart',
        //     'removeFromCart',
        //     'addToWishlist',
        //     'removeFromWishlist',
        // ]),
        ...mapActions([
            'addToCart',
            'removeFromCart',
            'addToWishlist',
            'removeFromWishlist',
            'setProductsRef',
            'setAttributesRef',
            'setAttributesIdValueRef'
        ]),
        // getAttributesIdValueArr () {
        //     this.getAttributesIdValue.map(val => {
        //         console.log(val);
        //         // let value = JSON.parse(JSON.stringify(val))
        //         // console.log({value})
        //     })
        // }
    },
    mounted () {
        this.setProductsRef(productsRef)
        this.setAttributesRef(attributesRef)
        this.setAttributesIdValueRef(attributesIdValueRef)
        // this.getAttributesIdValueArr()
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
</style>
