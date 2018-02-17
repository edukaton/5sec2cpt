<template>
  <div id="app">
    <div class="main ui container">
      <router-view/>
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
</style>
