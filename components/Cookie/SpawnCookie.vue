<template>
  <button @mouseenter="mouseEnter()" @mouseleave="mouseLeave()" v-on:keypress.space="moveCookie()" @click="moveCookie()" class="btn btn-circle"></button>
</template>

<script>
  import Cookiegame from "../../pages/Cookie";

    export default {
        name: "SpawnCookie",
        components:{Cookiegame},
        props:{},
        data(){
          return{
            hovering:false,

          }
        },
        methods:{
          moveCookie:function () {
            if(this.hovering) {
              let top = Math.floor(Math.random() * window.innerHeight-260)+260;
              let left = Math.floor(Math.random() * window.innerWidth-130)+130;
              this.$el.style.top = top+'px';
              console.log(top + ' ' + left);
              this.$el.style.left = left+'px';
              let size = (Math.floor(Math.random() * 70)+40)+'px';
              this.$el.style.width = size;
              this.$el.style.height = size;
              this.$emit("cookiepress");
            }
          },
          mouseEnter: function(){
            this.hovering = true;
          },
          mouseLeave: function () {
            this.hovering = false;
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
    border-radius: 60px;
    font-size: 24px;
    line-height: 1.33;
    background-color: red;
  }
  .btn-circle:focus {outline:0;}
</style>
