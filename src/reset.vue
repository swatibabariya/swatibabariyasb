<template>
  <div class="container">
    <div class="form-group">
      <div class=input><label for="email">Email:</label><input type="text" class="form-control" name="username"
          placeholder="Email Address" required="" autofocus="" :class="{ error: $v.email.$error }" v-model.trim="email"
          id="email" @input="$v.email.$touch()" />
        <div v-if="$v.email.$dirty">
          <p class="error-message" v-if="!$v.email.required">Email must not be empty.</p>
        </div>
        <br />

        <button @click='submit' class="btn btn-info btn-sm" :disabled="$v.$invalid" type="submit">sendlink</button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      let registeruser = JSON.parse(localStorage.getItem("userarray"));
      if (registeruser) {
        let flag = false;
        registeruser.some(element => {
          if (element.email == this.email) {
            flag = true;
          }
        });
        if (!flag) {
          alert("User doesnot exist");
        } else {
          this.$router.push("/login");
        }
      }
    }
  }
};
</script>

<style>
.input {
  padding: 5px;
}

input:focus {
  outline: none;
}

.error {
  border: 1px solid red;
}

.form-group {
  width: 500px;
  margin: auto;
}

.container {
  margin-top: 80px;
}
</style>