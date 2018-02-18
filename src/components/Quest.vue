<style lang="scss" scoped>
.quest-title {
  margin: 0 0 10px;
}
.quest-text {
  font-size: 15px;
}
</style>

<template>
  <div class="ui grid container">
    <div class="row ui segment grey message">
      <div class="column twelve wide">
        <img class="ui image medium left floated" :src="'static/' + current.img">
        <h3 class="quest-title">
          {{ current.title }}
        </h3>
        <p class="quest-text">
          {{ current.text }}
        </p>
      </div>
    </div>
    <div class="ui icon message">
      <div class="content">
        <h3>Wybierz maksymalnie dwa sposoby obrony</h3>
      </div>
    </div>
    <div class="ui row ui four doubling cards">
      <div v-for="s in user_skills" class="ui card fluid link" @click="select(s.id)">
        <div class="content">
          <div class="header">
            {{ s.title }}
          </div>
        </div>
        <div class="image">
          <img :src="'static/' + s.img">
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
      <button @click="answer" to="rozwiazanie" class="ui secondary button huge">Sprawdzam</button>
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
