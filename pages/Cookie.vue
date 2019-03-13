<template>
  <div>
    <button class="start-btn" v-show="isStartShown" @click="startGame()" >Start Game</button>
    <spawncookie v-show="isShown" @cookiepress="addPoint()"></spawncookie>
    <div class="counter">Click amount: {{counter}} points</div>
    <div class="end" v-show="isEndShown">
      <div class="endText" v-show="isEndShown">You got : {{points}}</div>
      <button @click="restartGame()" class="endBtn" v-show="isEndShown">Retry?</button>
    </div>
  </div>
</template>

<script>
  import Spawncookie from "../components/Cookie/SpawnCookie";
  let moment = require("moment");
  moment().format();
  let lastClicked;
  let startTime = moment();
    export default {
      name: "Cookie",
      components:{Spawncookie},
      props:{},
      data(){
        return {
          isStartShown:true,
          isEndShown:false,
          isShown:false,
          counter:0,
          lastClicked:0,
          points:0
        }
      },
      methods:{
        startGame: function(){
          console.log("deleted");
          this.isStartShown = false;
          this.isShown = true;
        },
        addPoint: function () {
          let newClick = moment();
          let timeBetweenClicks = newClick.diff(lastClicked);
          this.counter++;
          let clickPoints = 2000 - timeBetweenClicks;
          if(clickPoints < 0)
            clickPoints = 0;
          this.points += clickPoints;
          lastClicked = moment();
          if(this.counter>=10){
            this.isEndShown=true;
            this.isShown=false;
          }
        },
        restartGame: function () {
          this.points = 0;
          this.counter=0;
          this.isEndShown = false;
          this.isStartShown = true;
        }
      }
    }
</script>

<style scoped>
  .endBtn{
    background-color: red;
    font-size: 60px;
    text-align: center;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    justify-content: center;
    position: fixed;
    width: 200px;
    height: 100px;
    top: 50%;
    left: 42%;
  }
  .end{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: mediumvioletred;
  }
  .endText{
    position: fixed;
    font-size: 100px;
    top: 30%;
    left: 30%;
  }
  .counter{
    width: 100%;
    height: 60px;
    font-size: 30px;
    font-family: "Comic Sans MS",serif;
    background-color: darkcyan;
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
    left: 42%;
    position: fixed;
    font-size: 30px;
    font-family: "Comic Sans MS",serif;
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
