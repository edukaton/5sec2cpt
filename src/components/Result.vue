<style lang="scss">
.fail {
  opacity: 0.4 !important;
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
          <img :src="'/static/' + s.img">
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
      <div v-if="ifChosen(i)" v-for="s, i in user_skills" class="ui card fluid" :class="ifSuccess(i) ? '' : 'fail'">
        <div class="content">
          <div class="header">
            {{ s.title }}
          </div>
        </div>
        <div class="image">
          <img :src="'/static/' + s.img">
        </div>
        <div class="content">
          <div class="description">
            {{ s.text }}
          </div>
        </div>
        <div v-if="ifSuccess(i)" class="ui bottom green attached button">
          Sukces!
        </div>
        <div v-else class="ui bottom red attached button">
          Fail!
        </div>
      </div>
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
    'user_skills'
  ]),
}
</script>
