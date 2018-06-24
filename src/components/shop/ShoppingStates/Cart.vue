<template>
    <!-- <v-container fluid>
        <v-slide-y-transition mode="out-in"> -->
            <v-layout wrap row class="full-width">
                <div class="cart">
                    <div class="cart__count">
                        <router-link to="/cart">
                            Cart ({{ this.$store.state.cartCount }})
                        </router-link>
                        <div v-if="this.$store.state.cart.length > 0" class="cart__total-price">
                            <h4>Total price: <strong>{{ totalPrice }}</strong></h4>
                        </div>
                    </div>
                </div>
                <div v-if="this.$store.state.cart.length > 0" class="cart__products">
                    <div class="cart__product" 
                        v-for="item in this.$store.state.cart"
                        >
                        <!-- <div class="product"> -->
                            <!-- <div class="product__image">
                                <img :src="'../../../static/products/'+product.image" alt="">
                            </div> -->
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
                            <!-- <div class="product__controls">
                                <v-btn flat color="green" @click="addToCart(product)">Add to cart</v-btn>
                                <v-btn flat color="blue">Add to wishlist</v-btn>
                            </div> -->
                        <!-- </div> -->
                    </div>
                </div>
                <div v-else class="cart">
                    Cart is empty
                </div>
            </v-layout>
        <!-- </v-slide-y-transition>
    </v-container> -->
    <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="">
            Cart ({{ this.$store.state.cartCount }})
        </a>

        <div v-if="this.$store.state.cart.length > 0" class="navbar-dropdown is-boxed is-right">
            <a v-for="item in this.$store.state.cart"
                :key="item.id"
                class="navbar-item"
                href=""
            >
                <span class="removeBtn"
                    title="Remove from cart"
                    @click.prevent="removeFromCart(item)"
                >
                    X
                </span>
                {{ item.name }} x{{ item.addedQuantity }} - ${{ item.totalPriceOfItem }}
            </a>

            <a class="navbar-item" href="">
                Total: ${{ getTotalPrice }}
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" href="">
                Checkout
            </a>
        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Cart is empty
            </a>
        </div>
    </div> -->
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Cart',
    data () {
        return {}
    },
    computed: {
        // ...mapGetters[(
        //     'getTotalPrice'
        // )],
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += item.totalPriceOfItem;
            }

            return total.toFixed(2);
        }
    },
    methods: {
        ...mapActions([
            'removeFromCart'
        ]),
        // getState() {
        //     this.$store.state.products.map(item => {
        //         console.log(item);
        //         return item
        //     })
        // }
    },
    created() {
        // console.log(this.$store.state.products.products);
        // this.getState();
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
