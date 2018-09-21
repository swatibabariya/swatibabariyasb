<template>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active">
                    <router-link to=''>Home</router-link>
                </li>
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">Dropdown <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{name:'jeans',query:{product:'jeans'}}">Jeans</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'top',query:{product:'top'}}">Top</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'kurti',query:{product:'kurti'}}">Kurti</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'shirt',query:{product:'shirt'}}">Shirt</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'all',query:{product:'all'}}">All</router-link>
                        </li>
                    </ul>
                </li>


            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li v-if="!isLoggedIn">
                    <router-link to='/signup'><span class="glyphicon glyphicon-user"></span> Sign Up</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link to="/login"><span @click="logout"> Logout</span></router-link>
                </li>
                <li>
                    <router-link to='/cart' class="button is-info">
                        <span class="glyphicon glyphicon-shopping-cart">
                        </span>
                        <span> ({{itemsInCart}})</span>
                    </router-link>
                </li>

            </ul>
        </div>

    </nav>

</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      let count = this.itemsInCart;
      localStorage.setItem("cart", JSON.stringify(count));
    }
  },
  computed: {
    itemsInCart() {
      let cart1 = this.$store.getters.cartProducts;
      return cart1.length;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>
<style>
.black-background {
  background-color: black;
  border: 1px solid black;
  color: gray;
}
</style>