<template lang="pug">
    //- Side menu here
    .column.is-narrow.side-menu
        ul.nav
            li.nav-link
                nuxt-link(to="/")
                    i.fas.fa-tachometer-alt
                    span Dashboard
            li.nav-link
                nuxt-link(to="/hotels")
                    i.fas.fa-lock
                    span Hotels
</template>

<style scoped>
.side-menu {
  width: 256px;
}

.nav-link {
    margin-top: 15px
}

.nav-link > a {
  display: block;
  padding: 10px 20px;
  color: #de5b49;
  font-size: 18px;
  font-weight: bold;
}

.nav-link > a > span{
    padding-left: 10px
}
</style>

