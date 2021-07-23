<template>
  <h1 class="app__title">Traffic Light</h1>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: rgb(77, 208, 26);
  background: linear-gradient(
    0deg,
    rgba(77, 208, 26, 1) 0%,
    rgba(37, 134, 234, 1) 63%,
    rgba(37, 134, 234, 1) 100%
  );
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app__title {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
