<template>
    <v-layout wrap row class="full-width">
        <div class="wishlist">
            <div class="wishlist__count">
                <router-link to="/wishlist">
                    Wishlist ({{ wishlistCount }})
                </router-link>
                <div v-if="wishlist.length > 0" class="wishlist__total-price">
                    <h4>Total price: <strong>{{ getTotalPriceWishlist(wishlist).toFixed(2) }}</strong></h4>
                </div>
            </div>
        </div>
        <div v-if="wishlist.length > 0" class="wishlist__products">
            <div class="wishlist__product" 
                    v-for="item in wishlist"
                    :key="item.name"
                >
                <span class="wishlist__remove"
                    title="Remove from wishlist"
                    @click.prevent="removeFromWishlist(item)"
                >
                    X
                </span>
                <div class="product__head">
                    <h3 class="headline mb-0">{{item.name}}</h3>
                    <p class="wishlist__product-desc">Quantity: <strong>{{ item.addedQuantityWishlist }}</strong></p>
                    <p class="wishlist__product-desc">Price for one item: {{item.price.value}}</p>
                    <h4>
                        Total price for product: 
                        <span class="wishlist__product-total">{{ item.totalPriceOfItemWishlist.toFixed(2) }}</span>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Wishlist',
    data () {
        return {}
    },
    methods: {
        ...mapActions('wishlist', [
            'removeFromWishlist'
        ]),
        moveToCart(product) {
            this.$store.dispatch('cart/moveToCart', product)
            this.$store.dispatch('wishlist/removeFromWishlist', product)
        }
    },
    computed: {
        ...mapState('wishlist', [
           'wishlist',
           'wishlistCount' 
        ]),
        ...mapGetters('wishlist', [
            'getTotalPriceWishlist'
        ])
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
.wishlist__products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.wishlist__product {
    max-width: 30%;
    margin: 4px;
    padding: 20px;
    background-color: #424242;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 2px;
}
.wishlist__product-desc {
    margin-bottom: 0;
}
.wishlist__product-total {
    color: lightgreen;
}
.wishlist__remove {
    color: lightcoral;
    cursor: pointer;
    float: right;
}
</style>
