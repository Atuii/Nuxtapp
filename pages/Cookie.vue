<template>
  <div>
    <button class="start-btn" v-show="isStartShown" @click="startGame()" >Start Game</button>
    <spawncookie v-show="isShown" @cookiepress="addPoint()"></spawncookie>
    <div class="counter">Click amount: {{counter}}</div>
  </div>
</template>

<script>
  import Spawncookie from "../components/Cookie/SpawnCookie";
    export default {
      name: "Cookie",
      components:{Spawncookie},
      props:{},
      data(){
        return {
          isStartShown:true,
          isShown:false,
          counter:0
        }
      },
      methods:{
        startGame: function(){
          console.log("deleted");
          this.isStartShown = false;
          this.isShown = true;
        },
        addPoint: function () {
          this.counter++;
        }
      }
    }
</script>

<style scoped>
  .counter{
    width: 250px;
    height: 60px;
    font-size: 30px;
    border-radius: 0px 0px 30px 0px;
    font-family: "Comic Sans MS";
    background-color: red;
    color: #00ff00;
    position: fixed;
  }
  .start-btn {
    width: 200px;
    height: 100px;
    padding: 10px 16px;
    border-radius: 60px;
    line-height: 1.33;
    background-color: red;
    top: 50%;
    left: 50%;
    position: fixed;
    font-size: 30px;
    font-family: "Comic Sans MS";
    color: #f7f8fb;


  }
  .start-btn:focus {outline:0;}
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
</style>
