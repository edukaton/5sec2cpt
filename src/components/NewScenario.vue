<template>
  <div>
    <h1 class="ui header">
      Dodaj nowy scenariusz
      <div class="sub header">
        Opisz zagrożenie i jak się przed nim uchronić
      </div>
    </h1>
    <div class="ui form">
      <div class="row">
        <div class="column">

        </div>
      </div>
      <div class="field">
        <label>Opis</label>
        <textarea></textarea>
      </div>
      <div class="ui divider"></div>
      <div class="ui three column divided grid">
        <div class="row">
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="inline fields">
              <div class="five wide field">
                <img class="ui middle aligned tiny image" src="./../assets/randki.png">
              </div>
              <div class="five wide field">
                <span>Szyfrowanie hasła</span>
              </div>
              <div class="five wide field">
                <input type="number">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
      <button class="ui primary button">
        Dodaj
      </button>
    </div>

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
