<template>
  <div>start page</div>
</template>

<script>
export default {
  mounted() {
    // localStorage.clear();
    const previousLight = localStorage.getItem('previousLight');
    const yellowLight = localStorage.getItem('yellow');
    if (!yellowLight) {
      this.$router.push({ path: '/red' });
    }
    if (yellowLight === 'true') {
      this.$router.push({ path: '/yellow' });
    }
    if (yellowLight === 'false' && previousLight === 'red') {
      this.$router.push({ path: '/red' });
    }
    if (yellowLight === 'false' && previousLight === 'green') {
      this.$router.push({ path: '/green' });
    }
  },
};
</script>
