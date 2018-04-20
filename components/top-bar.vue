<template lang="pug">
    //- TopBar
    .columns.is-gapless.wrapper-top-bar
        .column.is-narrow.has-text-centered.bg-logo
            .logo
                img(src="~/static/logo.png")
        .column
        .column.is-narrow.has-text-right
          button.button.is-warning.btn-top-right(v-on:click.prevent="$store.dispatch('signOut')") Logout
            
</template>

<style scoped>
.bg-logo {
  background-color: #f0ca4d;
}
.logo {
  display: inline-block;
  height: 50px;
  width: 256px;
}

.logo > img {
  vertical-align: middle;
  height: 100%;
}

.wrapper-top-bar {
  margin-bottom: 0 !important;
  background-color: #324d5c;
}

.btn-top-right, .btn-top-right:hover, .btn-top-right:focus {
  border-radius: 0;
  height: 100%;
  padding: 0 20px;
  color: #de5b49;
}
</style>

<script>
export default {};
</script>