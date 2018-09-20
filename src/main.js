    import Vue from 'vue'
    import VueRouter from 'vue-router';
    import App from './App.vue'
    import {
        store
    } from '../store/store.js'
    import {
        routes
    } from './routes';
    import Vuelidate from 'vuelidate';


    Vue.use(VueRouter);
    Vue.use(Vuelidate);


    const router = new VueRouter({
        mode: 'history',
        routes,
    });


    Vue.prototype.login = false;
    new Vue({
        el: '#app',
        router,
        validations: {},
        store,
        render: h => h(App),
    })