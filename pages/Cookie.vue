<template>
  <div>
    <button class="start-btn" v-show="isStartShown" @click="startGame()" >Start Game</button>
    <spawncookie v-show="isShown" @cookiepress="addPoint()" :KeyboardClick="keyboardClick"></spawncookie>
    <div class="counter">
      <div class="counterText">{{counter}} / 10</div>
      <div style="margin-left: 5%" class="counterText"> {{timer}}</div>
    </div>
    <div class="end" v-show="isEndShown">
      <div class="endText" v-show="isEndShown">You got : {{points}} / 30000</div>
      <button @click="restartGame()" class="endBtn" v-show="isEndShown">Retry?</button>
    </div>
  </div>
</template>

<script>
  import Spawncookie from "../components/Cookie/SpawnCookie";
  let moment = require("moment");
  moment().format();
  let timeBetweenClicks;
  let lastClicked;
  let startTime;

  document.onkeypress = function (e) {
      if(e.keyCode == 120 || e.keyCode == 122){
        console.log(e.keyCode);
        this.keyboardClick = true;
      }
  };

    export default {
      name: "Cookie",
      components:{Spawncookie},
      props:{},
      data(){
        return {
          timeHandler:null,
          isStartShown:true,
          isEndShown:false,
          isShown:false,
          counter:0,
          lastClicked:0,
          points:0,
          timer:0,
          keyboardClick: false
        }
      },
      methods:{
        startGame: function(){
          console.log("deleted");
          this.isStartShown = false;
          this.isShown = true;
          startTime = moment();
          this.timeHandler = setInterval(this.updateTimer,10);
        },
        updateTimer: function(){
          let currentNewTime = moment(moment());
          let time = moment.duration(currentNewTime.diff(startTime));
          this.timer = time.toString().substr(2,4);
        },
        addPoint: function () {
          let newClick = moment();
          if(this.counter == 0)
          {
            timeBetweenClicks = newClick.diff(startTime);
          }
          else
            timeBetweenClicks = newClick.diff(lastClicked);
          this.counter++;
          let clickPoints = 3000 - timeBetweenClicks;
          if(clickPoints < 0)
            clickPoints = 0;
          console.log(clickPoints);
          this.points += clickPoints;
          lastClicked = newClick;
          if(this.counter>=10){
            clearInterval(this.timeHandler);
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
    cursor: url("/cursor.png") 20 20, auto;
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
    top: 20%;
    left: 25%;
  }
  .counter{
    width: 100%;
    height: 60px;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    font-family: "Comic Sans MS",serif;
    background-color: darkcyan;
    color: #00ff00;
    position: relative;
  }
  .counterText{
    display:inline-block;
  }
  .start-btn {
    width: 200px;
    height: 100px;
    padding: 10px 16px;
    border-radius: 60px;
    line-height: 1.33;
    background-color: red;
    top: 50%;
    left: 45%;
    position: fixed;
    font-size: 30px;
    font-family: "Comic Sans MS",serif;
    color: #f7f8fb;
    cursor: url("/cursor.png") 20 20, auto;


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
