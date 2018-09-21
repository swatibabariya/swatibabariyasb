<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!uproducts.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </p>

    <table class="table is-striped" v-show="uproducts.length">
      <thead>
        <tr>
          <td>item</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Update</td>

          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p,index) in uproducts" :key="index">
          <td><img :src='p.src' height="100" width="100"></td>
          <td>{{ p.price}}</td>
          <td>{{ p.quantity }}</td>
          <td><button @click="dec(index)">-</button>
            <button @click="inc(index)">+</button></td>
          <td><button @click='removeFromCart(index)'> <span class="glyphicon glyphicon-remove"></span></button></td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td><b>{{ total }}</b></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

    </table>
    <p><button v-show="uproducts.length" class='button is-primary' @click='checkout'>Checkout</button></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      uproducts: "cartProducts"
    }),
    total() {
      return this.uproducts.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.state.cart.splice(index, 1);
      return this.total - this.uproducts.quantity * this.uproducts.price;
    },
    checkout() {
      alert("Pay us " + this.total);
      this.$store.state.cart = [];
    },
    dec(index) {
      this.$store.state.cart[index].quantity--;
    },
    inc(index) {
      this.$store.state.cart[index].quantity++;
    }
  }
};
</script>
<style>
.cart {
  margin-top: 80px;
}
</style>