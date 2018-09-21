<template>
  <div class="container">
    <div v-if="this.$route.query.product=='kurti'">
      <h1 class="title">Kurti</h1>
      <p>{{kurticount}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in kurti" :key="index">
            <td><img :src='product.src' class="thumbnail" height="100" width="100"></td>
            <td>{{product.price}}</td>
            <td></td>
            <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.$route.query.product=='shirt'">
      <h1 class="title">Shirt</h1>
      <p>{{shirtcount}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in shirts" :key="index">
            <td><img :src='product.src' class="thumbnail" height="100" width="100"></td>
            <td>{{product.price}}</td>
            <td></td>
            <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.$route.query.product=='top'">
      <h1 class="title">Top</h1>
      <p>{{topcount}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in top" :key="index">
            <td><img :src='product.src' class="thumbnail" height="100" width="100"></td>
            <td>{{product.price}}</td>
            <td></td>
            <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.$route.query.product=='jeans'">
      <h1 class="title">Jeans</h1>
      <p>{{jeanscount}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in jeans" :key="index">
            <td><img :src='product.src' class="thumbnail" height="100" width="100"></td>
            <td>{{product.price}}</td>
            <td></td>
            <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.$route.query.product=='all'">
      <h1 class="title">products</h1>
      <p>{{length}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(products,index) in product" :key="index">
            <td><img :src='products.src' class="thumbnail" height="100" width="100"></td>
            <td>{{products.price}}</td>
            <td></td>
            <td><button @click='add(products)' class='button is-info'>Add to cart</button></td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapGetters({
      kurti: "allkurti",
      kurticount: "getnumberOfkurti",
      shirts: "allshirt",
      shirtcount: "getnumberOfshirt",
      top: "alltop",
      topcount: "getnumberOftop",
      jeans: "alljeans",
      jeanscount: "getnumberOfjeans",
      product: "allproduct",
      length: "numberofproduct",
      isLoggedIn: "isLoggedIn"
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
.container {
  margin-top: 60px;
}

.thumbnail:hover {
  position: relative;
  top: -25px;
  left: -35px;
  width: 500px;
  height: auto;
  display: block;
  z-index: 999;
}
</style>