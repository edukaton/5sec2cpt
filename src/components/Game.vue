<style lang="scss">
</style>

<template>
  <div>
    <div class="ui top attached menu">
      <div class="ui container">
        <div class="item">
          <h3>
            Zagrożenie #{{ index + 1 }}
          </h3>
        </div>
        <div class="right menu">
          <sui-progress
          state="active"
          indicating
          :percent="percent"
          ></sui-progress>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'index',
  ]),
}
</script>
