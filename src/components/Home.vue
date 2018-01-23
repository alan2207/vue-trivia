<template>
  <div class="hello">
    <h1 class="title is-1 has-text-white">{{ msg }}</h1>
    <img style="width: 420px" src="../assets/img/triviaimg.png" alt="">
    <br>
  <button @click="getStarted" class="button is-primary">Get Started</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Trivia!',
    };
  },
  methods: {
    getStarted() {
      this.$router.push({ name: 'Setup' });
    },
  },
};
</script>

<style scoped>

img {
  margin: 30px 0;
}
</style>
