<template>
  <v-app id="gif" @keypress="">
        <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style scoped>
  #gif{
    /*background-image: url("../static/rain.gif");*/
    background-image: radial-gradient(green,yellow,cyan);
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
