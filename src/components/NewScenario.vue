<template>
  <div>
    <div class="ui form">
      <div class="field">
        <label>Opis</label>
        <textarea></textarea>
      </div>
    </div>
    <button class="ui primary button">
      Dodaj
    </button>
  </div>

</template>

<script>
  export default {
    name: 'NewScenario',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
