<template>
  <div class="container">

    <h1 class="title">products</h1>
    <p>{{length}} products</p>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody v-if="this.$route.query.page==1">

        <tr v-for="(products,index) in product.slice(0,4)" :key="index">
          <td><img :src='products.src' class="thumbnail" height="100" width="100"></td>

          <td>{{products.price}}</td>
          <td></td>
          <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

        </tr>
      </tbody>
      <tbody v-if="this.$route.query.page==2">

        <tr v-for="(products,index) in product.slice(4,8)" :key="index">
          <td><img :src='products.src' class="thumbnail" height="100" width="100"></td>
          <td>{{products.price}}</td>
          <td></td>
          <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

        </tr>
      </tbody>
      <tbody v-if="this.$route.query.page==3">

        <tr v-for="(products,index) in product.slice(8,12)" :key="index">
          <td><img :src='products.src' class="thumbnail" height="100" width="100"></td>
          <td>{{products.price}}</td>
          <td></td>
          <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

        </tr>
      </tbody>
      <tbody v-if="this.$route.query.page==4">

        <tr v-for="(products,index) in product.slice(12,16)" :key="index">
          <td><img :src='products.src' class="thumbnail" height="110" width="110">
          </td>
          <td>{{products.price}}</td>
          <td></td>
          <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

        </tr>
      </tbody>
    </table>
    <div class="center">

      <router-link :to="{name:'page1',query:{page:1}}"><span class="margin">1</span></router-link>
      <router-link :to="{name:'page2',query:{page:2}}"><span class="margin">2</span></router-link>
      <router-link :to="{name:'page3',query:{page:3}}"><span class="margin">3</span></router-link>
      <router-link :to="{name:'page4',query:{page:4}}"><span class="margin">4</span></router-link>

    </div>

  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapGetters({
      product: "allproduct",
      isLoggedIn: "isLoggedIn",
      length: "numberofproduct"
    })
  },
  methods: {
    ...mapActions(["addToCart"]),
    add(params) {
      if (this.isLoggedIn) {
        this.addToCart(params);
      } else {
        this.$router.push({
          name: "login",
          query: {
            to: this.$route.fullPath
          }
        });
      }
    }
  }
};
</script>
<style>
.thumbnail:hover {
  position: relative;
  top: -25px;
  left: -35px;
  width: 500px;
  height: auto;
  display: block;
  z-index: 999;
}

.container {
  margin-top: 60px;
}

.center {
  margin-left: 45%;
  margin-top: -24px;
}

.margin {
  margin: 2px;
}

.margin:hover {
  background-color: gray;
}

.card-text {
  text-align: justify;
}

.card {
  border: 1px solid gray;
  padding: 5px;
}
</style>