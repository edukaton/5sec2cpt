<style lang="scss">
.fail {
  opacity: 0.4 !important;
}
.ui.small.image {
  margin: 0 auto 20px;
}
.ui.cards {
  margin-top: 0 !important;
}
</style>

<template>
  <div class="ui grid container">
    <div class="row centered">
      <h1>Możliwa obrona</h1>
    </div>
    <div class="ui row ui six centered doubling cards">
      <div v-for="s, i in defense" class="ui card fluid link">
        <div class="image">
          <img :src="'static/' + s.img">
        </div>
        <div class="content">
          {{ s.title }}
        </div>
        <div :style="'background-color: ' + s.hex + '; color: white'" class="ui bottom attached button">
          Zobacz opis
        </div>
      </div>
    </div>
    <div class="ui divider"></div>
    <div class="row centered">
      <h1>Twoja obrona</h1>
    </div>
    <div class="ui row ui four doubling centered cards">
      <div v-for="s in chosen" class="ui card fluid" :class="ifSuccess(s.id) ? '' : 'fail'">
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
        <div v-if="ifSuccess(s.id)" class="ui bottom green attached button">
          Sukces!
        </div>
        <div v-else class="ui bottom red attached button">
          Porażka!
        </div>
      </div>
    </div>
    <div class="row centered">
      <button v-if="percent == 0" @click="toEnd" to="rozwiazanie" class="ui secondary button huge">Koniec</button>
      <button v-if="percent !== 0" @click="next" to="rozwiazanie" class="ui blue button huge">Dalej</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'index',
    'defense',
    'chosen',
    'percent',
    'ifChosen',
    'ifSuccess',
    'current',
  ]),
  methods: {
    next() {
      this.$store.commit('next')
      this.$router.push('/gra/zagrozenie')
    },
    toEnd() {
      this.$router.push('/koniec')
    },
  }
}
</script>
