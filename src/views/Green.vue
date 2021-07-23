<template>
  <div class="container">
    <h1>{{ counter }}</h1>
    <div class="light-wrapper">
      <div class="traffic-light">
        <div class="traffic-light__red light opacity"></div>
        <div class="traffic-light__yellow light opacity"></div>
        <div
          :class="{ opacity: opacity }"
          class="traffic-light__green light"
        ></div>
      </div>
      <div class="pillar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 15,
      opacity: false,
    };
  },
  mounted() {
    localStorage.setItem('previousLight', 'green');
    localStorage.setItem('yellow', 'false');

    let interval = setInterval(() => {
      let opacityInerval;

      if (this.counter === 5) {
        opacityInerval = setInterval(() => {
          this.opacity = !this.opacity;
        }, 500);
      }

      this.counter--;

      if (this.counter <= 0) {
        clearInterval(interval);
        clearInterval(opacityInerval);
        this.$router.push('/yellow');
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.light-wrapper {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.traffic-light {
  background-color: rgb(33, 29, 41);
  width: 160px;
  height: 300px;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &__red {
    background-color: rgb(255, 0, 0);
  }
  &__yellow {
    background: rgb(255, 255, 0);
  }
  &__green {
    background-color: rgb(0, 255, 0);
  }
}
.light {
  width: 50%;
  height: 25%;
  clip-path: circle(35px);
}
.pillar {
  width: 20px;
  height: 200px;
  background-color: rgb(33, 29, 41);
}
.opacity {
  opacity: 0.3;
}
</style>
