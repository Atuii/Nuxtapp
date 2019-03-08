<template>
  <div class="section">
    <tabs>
      <tab title="Home">
        Cool home page
      </tab>
      <tab title="About">
        Cool about page
      </tab>
      <tab title="Contact">
        Cool contact page
      </tab>
    </tabs>
  </div>
</template>

<script>

  import Card from "../components/card";
  import Tabs from "../components/tabs";
  export default {
    components: {Tabs, Card},
    data() {
      return {
        name: "",
        surname: ""
      }
    },
    methods: {

    },
    computed: {
      fullname(){
        return this.name + " " + this.surname;
      }
    }
  }
</script>
<style>
</style>
