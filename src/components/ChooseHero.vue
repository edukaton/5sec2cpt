<template>
  <div>
    <h1 class="ui header">
      Wybierz swoją cechę główną
      <div class="sub header">
        Wybierz bohatera
      </div>
    </h1>
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui medium fade reveal image">
          <img class="visible content" src="./../assets/hipster.png">
          <span class="hidden content">Lorem ipsum</span>
        </div>
        <h2>Hipster</h2>
      </div>
      <div class="four wide column">
        <div class="ui medium fade reveal image">
          <img class="visible content" src="./../assets/haker.png">
          <span class="hidden content">Lorem ipsum</span>
        </div>
        <h2>Haker</h2>
      </div>
      <div class="four wide column">
        <div class="ui medium fade reveal image">
          <img class="visible content" src="./../assets/cwaniak.png">
          <span class="hidden content">Lorem ipsum</span>
        </div>
        <h2>Cwaniak</h2>
      </div>
      <div class="four wide column">
        <div class="ui medium fade reveal image">
          <img class="visible content" src="./../assets/agent.png">
          <span class="hidden content">Lorem ipsum</span>
        </div>
        <h2>Agent</h2>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ChooseHero',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reveal {
  min-height: 160px;
}
</style>
