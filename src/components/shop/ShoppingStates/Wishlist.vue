<template>
    <v-layout wrap row class="full-width">
        <div class="wishlist">
            <div class="cart__count">
                <a href="">
                    Wishlist ({{ this.$store.state.wishlistCount }})
                </a>
                <div v-if="this.$store.state.wishlist.length > 0" class="cart__total-price">
                    <h4>Total price: <strong>{{ totalPriceWishlist }}</strong></h4>
                </div>
            </div>
        </div>
        <div v-if="this.$store.state.wishlist.length > 0" class="cart__products">
            <div class="cart__product" 
                v-for="item in this.$store.state.wishlist"
                >
                <!-- <div class="product__image">
                    <img :src="'../../../static/products/'+product.image" alt="">
                </div> -->
                <span class="cart__remove"
                    title="Remove from wishlist"
                    @click.prevent="removeFromWishlist(item)"
                >
                    X
                </span>
                <div class="product__head">
                    <h3 class="headline mb-0">{{item.name}}</h3>
                    <p class="cart__product-desc">Quantity: <strong>{{ item.addedQuantityWishlist }}</strong></p>
                    <p class="cart__product-desc">Price for one item: {{item.price.value}}</p>
                    <h4>
                        Total price for product: 
                        <span class="cart__product-total">{{ item.totalPriceOfItemWishlist.toFixed(2) }}</span>
                    </h4>
                </div>
                <div class="product__controls">
                    <v-btn flat color="green" @click="moveToCart(item)">Move to cart</v-btn>
                </div>
            </div>
        </div>
        <div v-else class="wishlist">
            Wishlist is empty
        </div>
    </v-layout>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Wishlist',
    data () {
        return {}
    },
    methods: {
        ...mapMutations([
            'addToCart'
        ]),
        ...mapActions([
            'removeFromWishlist',
            'moveToCart',
        ])
    },
    computed: {
        totalPriceWishlist() {
            let total = 0;

            for (let item of this.$store.state.wishlist) {
                total += item.totalPriceOfItemWishlist;
            }

            return total.toFixed(2);
        }
    }
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
.wishlist {
    width: 100%;
    margin: 4px;
}
.cart__products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.cart__product {
    max-width: 30%;
    margin: 4px;
    padding: 20px;
    background-color: #424242;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 2px;
}
.cart__product-desc {
    margin-bottom: 0;
}
.cart__product-total {
    color: lightgreen;
}
.cart__remove {
    color: lightcoral;
    cursor: pointer;
    float: right;
}
</style>
