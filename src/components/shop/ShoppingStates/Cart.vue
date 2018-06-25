<template>
    <v-layout wrap row class="full-width">
        <div class="cart">
            <div class="cart__count">
                <router-link to="/cart">
                    Cart ({{ cartCount}})
                </router-link>
                <div v-if="cart.length > 0" class="cart__total-price">
                    <h4>Total price: <strong>{{ getTotalPriceCart(cart).toFixed(2) }}</strong></h4>
                </div>
            </div>
        </div>
        <div v-if="cart.length > 0" class="cart__products">
            <div class="cart__product" 
                    v-for="item in cart"
                    :key="item.name"
                >
                <span class="cart__remove"
                    title="Remove from cart"
                    @click.prevent="removeFromCart(item)"
                >
                    X
                </span>
                <div class="product__head">
                    <h3 class="headline mb-0">{{item.name}}</h3>
                    <p class="cart__product-desc">Quantity: <strong>{{ item.addedQuantity }}</strong></p>
                    <p class="cart__product-desc">Price for one item: {{item.price.value}}</p>
                    <h4>
                        Total price for product: 
                        <span class="cart__product-total">{{ item.totalPriceOfItem.toFixed(2) }}</span>
                    </h4>
                </div>
            </div>
        </div>
        <div v-else class="cart">
            Cart is empty
        </div>
    </v-layout>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Cart',
    data () {
        return {}
    },
    computed: {
        ...mapState('cart', {
            cart: state => state.cart,
            cartCount: state => state.cartCount,
        }),
        ...mapGetters('cart', [
            'getTotalPriceCart'
        ])
    },
    methods: {
        ...mapActions('cart', [
            'removeFromCart'
        ])
    }
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
.cart {
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
