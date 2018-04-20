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
                    .has-text-centered.field
                        h4.title.is-4 Forgot your password?
                        p.subtitle.is-6 Enter your email address and we will send you instructions on how to reset your password.

                    p.text-danger(v-if="form.err && form.err !== ''") {{ form.err }}
                    p.text-success(v-if="form.suc && form.suc !== ''") {{ form.suc }}

                    b-field
                        b-input(type="email" v-model="email" placeholder="Enter Email" icon="account" maxlength="35")

                    b-field
                        button.button.is-primary.w-100(type="submit") Reset Password

                    b-field.has-text-centered
                        nuxt-link.is-size-7.has-text-black(to="/login") Login Page
        .column
</template>

<script>
import { auth } from "~/services/fireinit.js";
export default {
  layout: "loginLayout",
  data() {
    return {
      form: {
        suc: "",
        err: "",
        loading: false
      },
      email: ""
    };
  },
  methods: {
    submit() {
      const self = this;
      self.form.err = "";
      self.form.suc = "";
      if (self.email !== "") {
        self.form.loading = true;
      } else {
        self.form.err = "Some Field Empty!";
      }
    }
  }
};
</script>
