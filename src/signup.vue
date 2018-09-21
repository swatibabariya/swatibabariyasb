<template>
  <div class="wrapper">

    <form class="form-signin">
      <h2 class="form-signin-heading">SignUp</h2>
      <div class=input><label for="email">Email</label><input type="text" class="form-control" name="username"
          placeholder="Email Address" required="" autofocus="" :class="{ error: $v.email.$error }" v-model.trim="email"
          id="email" @input="$v.email.$touch()" />
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

      <div class="input">
        <label for="repeatPassword">Repeat Password</label>
        <input :class="{ error: $v.repeatPassword.$error }" type="password" class="form-control" id="repeatPassword"
          v-model.trim="repeatPassword" @input="$v.repeatPassword.$touch()">

        <div v-if="$v.repeatPassword.$dirty">
          <p class="error-message" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>

          <p class="error-message" v-if="!$v.repeatPassword.required">Password must not be empty.</p>
        </div>
      </div>
      <button :disabled="$v.$invalid" type="submit" @click="onsubmit" class="btn btn-lg btn-primary btn-block">signup</button>

    </form>
  </div>
</template>
<script>
import VuePassword from "vue-password";
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },

  validations: {
    email: {
      required,
      email
    },

    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password")
    }
  },
  components: {
    VuePassword
  },
  methods: {
    onsubmit() {
      if (!this.$v.$invalid && typeof Storage !== "undefined") {
        let user = JSON.parse(localStorage.getItem("userarray"));
        let flag;
        if (user) {
          flag = user.find(element => element.email == this.email);
        } else {
          flag = false;
        }
        if (!flag) {
          if (user == undefined) {
            let entry = [
              {
                email: this.email,
                password: this.password
              }
            ];
            localStorage.setItem("userarray", JSON.stringify(entry));
          } else {
            user.push({
              email: this.email,
              password: this.password
            });
            localStorage.setItem("userarray", JSON.stringify(user));
          }
          this.$router.push("/login");
        } else {
          alert("email is alredy taken.");
          return;
        }
      }
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
  padding: 1px;
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

.form-signin {
  width: 500px;
  margin: auto;
}
</style>