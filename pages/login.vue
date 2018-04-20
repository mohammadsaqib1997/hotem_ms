<template lang="pug">
    section.section
      .columns.is-desktop
        .column
        .column.is-3-desktop
          figure.image.cus-logo-size
            img(src="~/static/logo.png")
          .card.is-primary.cus-card
            .card-content
              form(v-on:submit.prevent="submit")
                b-field(v-if="form.err !== '' || form.suc !== ''")
                  p.help.is-danger.is-size-6.has-text-centered(v-if="form.err && form.err !== ''") {{ form.err }}
                  p.help.is-success.is-size-6.has-text-centered(v-if="form.suc && form.suc !== ''") {{ form.suc }}

                b-field(label="Email" v-bind:type="(validation.hasError('email'))?'is-danger':''" v-bind:message="(validation.hasError('email'))?validation.firstError('email'):''")
                  b-input(type="email" v-model="email" placeholder="Enter Email" icon="user" maxlength="35")

                b-field(label="Password" v-bind:type="(validation.hasError('password'))?'is-danger':''" v-bind:message="(validation.hasError('password'))?validation.firstError('password'):''")
                  b-input(type="password" v-model="password" placeholder="Enter Password" icon="lock-open" password-reveal)

                b-field
                  b-checkbox(v-model="remember_me")
                    | Remember Password
                b-field
                  button.button.is-primary.w-100.is-medium(type="submit" v-bind:class="{ 'is-loading': form.loading }") Login

                b-field.has-text-centered
                    nuxt-link.is-size-7.has-text-black(to="/forgot-password") Forgot Password?
        .column
</template>

<script>
import { auth } from "~/services/fireinit.js";
import SimpleVueValidation from "simple-vue-validator";

const Validator = SimpleVueValidation.Validator;

export default {
  layout: "loginLayout",
  data() {
    return {
      form: {
        suc: "",
        err: "",
        loading: false
      },
      email: "",
      password: "",
      remember_me: true
    };
  },
  validators: {
    email: function(value) {
      return Validator.value(value)
        .required()
        .email();
    },
    password: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(35);
    }
  },
  methods: {
    submit() {
      const self = this;
      self.form.err = "";
      self.form.suc = "";

      self.form.loading = true;
      self.$validate().then(function(success) {
        if (success) {
          auth
            .signInWithEmailAndPassword(self.email, self.password)
            .then(() => {
              self.form.suc = "Successfully Login!";
              setTimeout(() => {
                self.form.loading = false;
                self.$router.push("/");
              }, 1500);
            })
            .catch(function(error) {
              var errorCode = error.code;
              self.form.err = error.message;
              self.form.loading = false;
            });
        } else {
          self.form.loading = false;
        }
      });
    }
  }
};
</script>
