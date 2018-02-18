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
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0.5
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
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
