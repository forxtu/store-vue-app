<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <!-- <img src="@/assets/helloworld.gif" alt="Vuetify.js" class="mb-5"> -->
                <p v-for="product of products">
                    {{product.sku}}
                </p>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import { db } from "../../config/firebase";

export default {
    name: "HelloWorld",
    firebase: {
        products: {
            source: db.ref('products'),
            cancelCallback(err) {
                console.error(err);
            }
        }
    },
    data() {
        return {
            
        };
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
