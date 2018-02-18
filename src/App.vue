<template>
  <div id="app">
    <div class="main ui container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    background-image: url('assets/landing_bcg.png');
    min-height: 100vh;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s linear;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0.5
  }
</style>
