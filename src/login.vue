<template>
  <div class="wrapper">

    <form class="form-login">

      <h2 class="form-signin-heading">Please login</h2>
      <div class="input"><label for="email">Email</label><input type="text" class="form-control" name="username"
          placeholder="Email Address" required="" autofocus="" :class="{ error: $v.email.$error }" v-model.trim="email"
          id="email" width="50px" @input="$v.email.$touch()" />
        <div v-if="$v.email.$dirty">
          <p class="error-message" v-if="!$v.email.email">Please enter a valid email address.</p>
          <p class="error-message" v-if="!$v.email.required">Email must not be empty.</p>
        </div>

      </div>
      <label for="password">Password</label>
      <vue-password required="" v-model.trim="password" class="input" @input="$v.password.$touch()"></vue-password>
      <div v-if="$v.password.$dirty">
        <p class="error-message" v-if="!$v.password.required">Password must not be empty.</p>
        <p class="error-message" v-if="!$v.password.minLength">Password length must be 6</p>
      </div>

      <button :disabled="$v.$invalid" type="submit" @click="login" class="btn btn-lg btn-primary btn-block">LogIn</button><br />
      <router-link to='/reset'>Forget Password</router-link>

    </form>
  </div>
</template>
<script>
import VuePassword from "vue-password";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    VuePassword
  },

  validations: {
    email: {
      required,
      email
    },

    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          if (this.$route.query.to) {
            this.$router.push(this.$route.query.to);
          } else {
            this.$router.push("/");
            // this.$store.getters.cartProducts.length = JSON.parse(
            //   localStorage.getItem("cart")
            // );
          }
        });
    }
  }
};
</script>

<style>
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}

.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}

.input {
  padding: 5px;
}

input:focus {
  outline: none;
}

.error {
  border: 1px solid red;
}

.wrapper {
  margin-top: 80px;
}

.form-login {
  width: 500px;
  margin: auto;
}
</style>