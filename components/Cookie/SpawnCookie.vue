<template>
  <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()" @click="moveCookie()" class="btn btn-circle"></div>
</template>

<script>
  import Cookiegame from "../../pages/Cookie";

    export default {
        name: "SpawnCookie",
        components:{Cookiegame},
        props:['KeyboardClick'],
        data(){
          return{
            hovering:false,

          }
        },
        mounted(){
          setInterval(this.checkForClick,10)
        },
        methods:{
          checkForClick:function(){
            if(this.keyboardClick == true){
              console.log("lol")
              this.moveCookie();
            }
          },
          moveCookie:function () {
            if(this.hovering) {
              let top = Math.floor(Math.random() * (window.innerHeight-460))+230;
              let left = Math.floor(Math.random() * (window.innerWidth-460))+230;
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
    z-index: 2;
  }
  .btn-circle:focus {outline:0;}
</style>
