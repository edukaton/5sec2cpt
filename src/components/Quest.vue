<style lang="scss">
</style>

<template>
  <div class="ui grid container">
    <div class="row ui segment">
      <div class="column ten wide centered">
        <img class="ui image left floated" :src="current.img">
        <h3>
          {{ current.title }}
        </h3>
        <p>
          {{ current.text }}
        </p>
      </div>
    </div>
    <!-- <div class="ui divider"></div> -->
    <div class="row centered">
      <router-link to="rozwiazanie" class="ui secondary button huge">Sprawdzam</router-link>
    </div>
    <div class="ui row ui four doubling cards">
      <div v-for="s, i in user_skills" class="ui card fluid link" @click="select(i)">
        <div class="content">
          <div class="header">
            {{ s.title }}
          </div>
        </div>
        <div class="image">
          <img :src="s.img">
        </div>
        <div class="content">
          <div class="description">
            {{ s.text }}
          </div>
        </div>
        <div v-if="!choose(i)" class="ui bottom attached button">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'index',
    'chosen',
    'percent',
    'current',
    'user_skills'
    ]),
  methods: {
    select(index) {
      this.$store.commit('chose', index)
    },
    choose(index) {
      return this.chosen(index)
    },
  }
}
</script>
