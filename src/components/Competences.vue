<template>
  <div>
    <h1 class="ui header">
      Twój bohater ma takie umiejętności
      <div class="sub header">
       Przeczytaj opis
      </div>
    </h1>
    <div class="ui row ui four doubling cards">
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Tor
          </div>
        </div>
        <div class="image">
          <img src="./../assets/hipster.png">
        </div>
        <div class="content text">
          <div class="description">
            Łączysz się z Internetem za pomocą Tora – narzędzia, które zapewnia użytkownikom anonimowe korzystanie z zasobów Internetu oraz usług dostępnych tylko za jego pomocą.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Zobacz poradę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Unikanie śledzenie
          </div>
        </div>
        <div class="image">
          <img src="./../assets/haker.png">
        </div>
        <div class="content text">
          <div class="description">
            Zdajesz sobie sprawę z tego, że każdy Twój ruch w sieci jest śledzony przez wiele podmiotów. Korzystasz z rozwiązań, które pomagają Ci się przed tym bronić
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Zobacz poradę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Alternatywna przeglądarka
          </div>
        </div>
        <div class="image">
          <img src="./../assets/cwaniak.png">
        </div>
        <div class="content text">
          <div class="description">
            Korzystasz z wyszukiwarki, która – w przeciwieństwie do najpopularniejszej w sieci – nie buduje, w oparciu o wpisywane słowa, Twojego profilu dla reklamodawców ani nie dostosowuje do niego wyników wyszukiwania.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Zobacz poradę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Ustawienia prywatności
          </div>
        </div>
        <div class="image">
          <img src="./../assets/agent.png">
        </div>
        <div class="content text">
          <div class="description">
            Nie zdajesz się na domyślne rozwiązania. Zmieniasz ustawienia Twojej przeglądarki internetowej tak, by lepiej chroniła Twoją prywatność.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Zobacz poradę
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'selected',
    ]),
    methods: {
      selectHero(hero) {
        return this.$router.push('/kompetencje')
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .reveal {
    min-height: 160px;
  }
</style>
