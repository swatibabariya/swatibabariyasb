import Vue from 'vue'
import Vuex from 'vuex'
import {
    ADD_TO_CART
} from './mutation-types'
import {
    LOGIN
} from './mutation-types'
import {
    LOGIN_SUCCESS
} from './mutation-types'
import {
    LOGOUT
} from './mutation-types'


Vue.use(Vuex)



const state = {
    count: 0,
    myorder: [],
    istotal: 0,

    cart: [],
    isLoggedIn: !!localStorage.getItem("token"),



    products: [{

            id: 1,
            src: 'images/t1.jpg',
            price: 399,
            category: 'top'
        },
        {

            id: 21,
            src: 'images/j1.jpg',
            price: 599,
            category: 'jeans'
        },
        {

            id: 11,
            src: 'images/k1.jpg',
            price: 599,
            category: 'kurti'
        },
        {

            id: 31,
            src: 'images/s1.jpg',
            price: 499,
            category: 'shirt'
        },


        {
            id: 2,
            src: 'images/t2.jpg',
            price: 995,
            category: 'top'
        },
        {
            id: 32,
            src: 'images/s2.jpg',
            price: 895,
            category: 'shirt'
        },
        {
            id: 12,
            src: 'images/k2.jpg',
            price: 895,
            category: 'kurti'
        },
        {
            id: 22,
            src: 'images/j2.jpg',
            price: 995,
            category: 'jeans'
        },


        {
            id: 3,
            src: 'images/t3.jpg',
            price: 595,
            category: 'top'
        },
        {
            id: 33,
            src: 'images/s3.jpg',
            price: 695,
            category: 'shirt'
        },
        {
            id: 13,
            src: 'images/k3.jpg',
            price: 695,
            category: 'kurti'
        },
        {
            id: 23,
            src: 'images/j3.jpg',
            price: 695,
            category: 'jeans'
        },

        {
            id: 4,
            src: 'images/t4.jpg',
            price: 495,
            category: 'top'
        },

        {
            id: 34,
            src: 'images/s4.jpg',
            price: 595,
            category: 'shirt'
        },
        {
            id: 14,
            src: 'images/k4.jpg',
            price: 595,
            category: 'kurti'
        },
        {
            id: 24,
            src: 'images/j4.jpg',
            price: 795,
            category: 'jeans'
        }
    ],


}
const getters = {


    alltop: state => state.products.filter(product => product.category == 'top'),
    getnumberOftop: state => (state.products.filter(product => product.category == 'top')) ? state.products.filter(product => product.category == 'top').length : 0,
    alljeans: state => state.products.filter(product => product.category == 'jeans'),
    getnumberOfjeans: state => (state.products.filter(product => product.category == 'jeans')) ? state.products.filter(product => product.category == 'jeans').length : 0,

    allkurti: state => state.products.filter(product => product.category == 'kurti'),
    getnumberOfkurti: state => (state.products.filter(product => product.category == 'kurti')) ? state.products.filter(product => product.category == 'kurti').length : 0,

    allshirt: state => state.products.filter(product => product.category == 'shirt'),
    getnumberOfshirt: state => (state.products.filter(product => product.category == 'shirt')) ? state.products.filter(product => product.category == 'shirt').length : 0,

    allproduct: state => state.products,
    numberofproduct: state => (state.products) ? state.products.length : 0,
    cartProducts: state => {

        return state.cart.map(item => {
            const product = state.products.find(product => product.id == item.id);
            return {
                quantity: item.quantity,
                ...product,
            }
        });


    },
    isLoggedIn: state => {
        return state.isLoggedIn
    }

}


const actions = {
    addToCart({
        commit
    }, payload) {
        commit(ADD_TO_CART, {
            id: payload.id
        });
    },
    login({
        commit
    }, payload) {
        commit(LOGIN);
        return new Promise(resolve => {

            let registeruser = JSON.parse(localStorage.getItem("userarray"));
            registeruser.forEach((element) => {
                if (element.email == payload.email && element.password == payload.password) {
                    localStorage.setItem("token", "ABC");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }
            });
        });
    },
    logout({
        commit
    }) {
        localStorage.removeItem("token");
        commit(LOGOUT);

    }

}
const mutations = {

    [ADD_TO_CART](state, {
        id
    }) { //store product in cart
        const record = state.cart.find(p => p.id === id) //check record

        if (!record) {
            state.cart.push({
                id,
                quantity: 1
            })

        } else {
            record.quantity++
        }


    },
    [LOGIN](state) {
        state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
        state.isLoggedIn = true;
        state.pending = false;

    },
    [LOGOUT](state) {
        state.isLoggedIn = false;
    }

}


export const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})