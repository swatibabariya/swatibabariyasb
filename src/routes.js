import signup from './signup.vue';
import login from './login.vue';
import home from './home.vue';
import product from './components/product.vue'
import products from './components/products.vue'
import Cart from './components/Cart.vue';
import reset from './reset.vue'

export const routes = [{
        path: '/signup',
        component: signup
    },
    {
        path: '/login',
        component: login,
        name: 'login',
    },
    {
        path: '/',
        component: home,

    },
    {
        path: '/product',
        component: product,
        name: 'top',
        query: {
            product: 'top'
        }
    },
    {
        path: '/product',
        component: product,
        name: 'kurti',
        query: {
            product: 'kurti'
        }
    },
    {
        path: '/product',
        component: product,
        name: 'jeans',
        query: {
            product: 'jeans'
        }
    },
    {
        path: '/product',
        component: product,
        name: 'shirt',
        query: {
            product: 'shirt'

        }
    },
    {
        path: '/product',
        component: product,
        name: 'all',
        query: {
            product: 'all'

        }
    },

    {
        path: '/products',
        component: products,
        name: 'page1',
        query: {
            page: 1
        }
    },
    {
        path: '/products',
        component: products,
        name: 'page2',
        query: {
            page: 2
        }
    },
    {
        path: '/products',
        component: products,
        name: 'page3',
        query: {
            page: 3
        }
    },
    {
        path: '/products',
        component: products,
        name: 'page4',
        query: {
            page: 4
        }
    },

    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/reset',
        component: reset
    },


]