<template lang="pug">
    .wrapper
        top-bar
        .columns.is-gapless
            side-menu
            
            //- content here
            .column.wrapper-content
                .wrapper-body
                    nuxt
</template>

<style scoped>
.wrapper {
  height: 100vh;
  background-color: #f0ca4d;
}

.wrapper-content {
  background-color: #ffffff;
  min-height: calc(100vh - 50px);
}

.wrapper-body {
  padding: 0.75rem;
}
</style>


<script>
import { mapState } from "vuex";
import topBar from "~/components/top-bar.vue";
import sideMenu from "~/components/side-menu.vue";
export default {
  components: {
    "top-bar": topBar,
    "side-menu": sideMenu
  },
  computed: {
    ...mapState({
      user: "user"
    })
  },
  watch: {
    user(val) {
      console.log(val);
      if (val === null) this.$router.push("/login");
    }
  }
};
</script>

