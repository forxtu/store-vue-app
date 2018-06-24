import Vue from 'vue'

import Router from 'vue-router'
import Shop from '@/components/shop/Shop'
import Tasks from '@/components/Tasks'
import Cart from '@/components/shop/ShoppingStates/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/tasks',
        name: 'Lista zadań',
        component: Tasks
    }
    ]
})
