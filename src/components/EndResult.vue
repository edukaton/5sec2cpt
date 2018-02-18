<template>
  <div class="hello ui two column centered grid">
    <div class="column aligned">
      <h1>Koniec gry</h1>
      <div class="ui grid icons">
        <img class="icon" src="./../assets/bagiety.png">
      </div>

      <div class="ui message red">
        <div class="header">
          Porażka!
        </div>
        <p>Niestety nie udało Ci się uchronić przed zagrożeniem
          i będziesz musiał tłumaczyć się policji</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Witajcie w naszej bajce'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 45px;
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }
  .icon {
    max-height: 200px;
  }
  .icons {
    margin-bottom: 50px !important;
    display: inline-block !important;
  }
  p.info {
    margin-top: 30px;
    font-size: 1.1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
