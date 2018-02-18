<style lang="scss" scoped>
.quest-title {
  margin: 0 0 10px;
}
.quest-text {
  font-size: 15px;
}
  h2 {
    padding-left: 0 !important;
  }
.ui.small.image {
  margin: 0 auto 20px;
}
</style>

<template>
  <div class="ui grid container">
    <h2>Obroń się przez zagrożeniem, wybierz maksymalnie dwie obrony</h2>
    <div class="row ui segment grey message">
      <div class="column fifteen wide">
        <img class="ui image small left floated" :src="'static/' + current.img">
        <h3 class="quest-title">
          {{ current.title }}
        </h3>
        <p class="quest-text">
          {{ current.text }}
        </p>
      </div>
    </div>
    <div class="ui row ui four doubling cards">
      <div v-for="s in user_skills" class="ui card fluid link" @click="select(s.id)">
        <div class="content">
          <div class="header">
            {{ s.title }}
          </div>
        </div>
        <div class="">
          <img class="ui small image" :src="'static/' + s.img">
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
    <div class="row centered">
      <button @click="answer" to="rozwiazanie" class="ui blue button huge">Sprawdzam</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'ifChosen',
    'chose',
    'percent',
    'current',
    'user_skills'
  ]),
  methods: {
    select(index) {
      this.$store.commit('chose', index)
    },
    answer() {
      this.$store.commit('answer')
      this.$router.push('/gra/rozwiazanie')
    },
  }
}
</script>
