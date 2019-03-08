<template>
  <button @click="moveCookie()" class="btn btn-circle"></button>
</template>

<script>
  import Cookiegame from "../../pages/Cookie";
    export default {
        name: "SpawnCookie",
        components:{Cookiegame},
        props:{},
        methods:{
          moveCookie:function () {
            this.$el.style.top = Math.floor(Math.random() * 1000)+'px';
            console.log(this.$el.style.top)
            this.$el.style.left = Math.floor(Math.random() * 1900)+'px';
            var size = (Math.floor(Math.random() * 70)+20)+'px'
            this.$el.style.width = size;
            this.$el.style.height = size;
            this.$emit("cookiepress")
          }
        }

    }
</script>

<style scoped>
  .btn-circle {
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    position: fixed;
    padding: 10px 16px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
    background-color: red;
  }
  .btn-circle:focus {outline:0;}
</style>
