<template>
  <div>
    <h1 class="ui header">
      Wybierz swojego bohatera
      <div class="sub header">
        Wybierz bohatera
      </div>
    </h1>
    <div class="ui row ui four doubling cards">
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Hipster
          </div>
        </div>
        <div class="image">
          <img src="./../assets/hipster.png">
        </div>
        <div class="content text">
          <div class="description">
            Alternatywna wyszukiwarka? Podawanie danych z kosmosu? Wyszukiwanie „gwiazdek” i „drobnych druczków” w regulaminach? Hipster nie da się oszukać. Chronisz się przed zagrożeniami w sieci przede wszystkim dlatego, że jest to na czasie. Zapominasz jednak o podstawowych zabezpieczeniach, ponieważ bardziej niż prywatność cenisz sobie rozpoznawalność i bycie zawsze online.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Wybierz Kartę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Haker
          </div>
        </div>
        <div class="image">
          <img src="./../assets/haker.png">
        </div>
        <div class="content text">
          <div class="description">
            Jesteś urodzonym łamaczem kodów i dlatego szyfrujesz wszystko co się da: maile, pliki i smsy. Nikt nie może dostać się do Twoich dysków. Masz jednak słabość do nowinek technologicznych i nie zawsze skutecznie zabezpieczasz się przed manipulacjami w sieci.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Wybierz Kartę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Cwaniak
          </div>
        </div>
        <div class="image">
          <img src="./../assets/cwaniak.png">
        </div>
        <div class="content text">
          <div class="description">
            Nie jesteś mocny w kodowaniu, ale dobrze znasz dostępne w sieci narzędzia do zabezpieczania się przed kradzieżą danych. Blokujesz reklamy, kładziesz nacisk na mocne hasła i włączasz ustawienia prywatności. Twoja przeglądarka to za każdym uruchomieniem terra incognita. Mimo ostrożności, nadal możesz paść ofiarą „fake newsów” i dezinformacji.

          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Wybierz Kartę
        </div>
      </div>
      <div class="ui card fluid link">
        <div class="content">
          <div class="header">
            Agent
          </div>
        </div>
        <div class="image">
          <img src="./../assets/agent.png">
        </div>
        <div class="content text">
          <div class="description">
            Wiesz, że jakakolwiek obecność i aktywność w sieci zostawia po sobie ślad. Dlatego ograniczasz ją do minimum – kupujesz w realu, nie korzystasz z mediów społecznościowych i dysków do przechowywania danych w chmurze. Przez to odcinasz się od wielu potrzebnych Ci informacji, które mógłbyś znaleźć w sieci. Wiele rzeczy zajmuje Ci też duuużo czasu.
          </div>
        </div>
        <div class="ui bottom attached button" @click="selectHero()">
          <i class="add icon"></i>
          Wybierz Kartę
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
.content.text {
  min-height: 290px;
}
</style>
