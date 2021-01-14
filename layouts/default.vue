<template>
  <div>
    <header @click="navHome">
      Reynolds 2021 Goals
    </header>
    <div id="app-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
header {
  cursor: pointer;
  width: 100vw;
  background: var(--col-dark-grey);
  left: 0;
  color: white;
  padding: 15px 20px;
  font-size: 2rem;
}
</style>
