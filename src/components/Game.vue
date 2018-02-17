<style lang="scss">
.wrapper {
  width: 100%;
  padding: 13px;
  .progress {
    width: 60%;
    float: right;
    margin: 0 !important;
  }
}
.body {
  padding-top: 120px;
}
</style>

<template>
  <div>
    <div class="ui top fixed menu">
      <div class="ui container">
        <div class="item">
          <h3>
            Zagrożenie #{{ index + 1 }}
          </h3>
        </div>
        <div class="wrapper">
          <sui-progress
          state="active"
          indicating
          :percent="percent"
          ></sui-progress>
        </div>
      </div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'index',
    'percent',
  ]),
}
</script>
