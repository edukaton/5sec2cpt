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
        <label>Nazwa zagrożenia</label>
        <input type="text">
        <span class="hint">Nazwij krótko przed czym trzeba się bronić, korzystając z Internetu, np. wyłudzanie danych, mowa nienawiści, strony z pornografią, malware.</span>
      </div>
      <div class="field">
        <label>Opis</label>
        <input type="text">
        <span class="hint">Opisz w 2-3 zdaniach, na czym polega i z czym wiąże się dane zagrożenie.</span>
      </div>
        <div class="field m-t-xl">
          <div class="ui toggle checkbox">
            <input type="checkbox" name="gift" tabindex="0" class="hidden">
            <label>Zagrożenie krytyczne</label>
          </div>
        </div>
      <span class="hint">Brak obrony na zagrożenie krytyczne spowoduje niepomyślne zakończenie gry</span>
      <div class="ui divider"></div>
      <div class="ui three column divided grid">

        <div class="ui row ui four doubling cards">
          <div v-for="s in all_skills" class="ui card fluid link">
            <div class="content">
              <div class="header">
                {{ s.title }}
              </div>
            </div>
            <div class="image">
              <img :src="'/5sec2cpt/static/' + s.img">
            </div>
            <div class="content">
              <div class="description">
                {{ s.text }}
              </div>
            </div>
            <div v-if="!ifChosen(s.id)" class="ui bottom attached button">
              <i class="add icon"></i>
              Wybierz Kartę
            </div>
            <div v-else class="ui bottom green attached button">
              <i class="checkmark icon"></i>
              Wybrano!
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
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'all_skills',
      'ifChosen'
    ]),
    methods: {
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
  .m-t-xl {
    padding-top: 20px;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .hint {
    font-style: italic
  }
  a {
    color: #42b983;
  }
</style>
