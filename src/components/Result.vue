<template>
  <div>
      <h2 class="title is-2 has-text-white">Result</h2>
      <h3 class="title is-3 has-text-white">
        {{ $store.state.score }}/{{ $store.state.setup.numberOfQuestions }} Correct
      </h3>
      <button @click="goHome"  class="button is-white">Home</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['resetQuiz']),
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
  beforeDestroy() {
    this.resetQuiz();
  },
};
</script>

