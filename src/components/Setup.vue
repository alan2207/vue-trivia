<template>
  <div class="bordered">
    <h2 class="title is-3">Setup</h2>
    <div>
      <label class="label">Number of questions:
        <div class="control">
          <input
            @input="optionSelected('numberOfQuestions', $event)"
            value="10"
            class="input"
            :min="min"
            :max="max"
            type="number">
        </div>
      </label>

      <label class="label">Category:
        <div class="control">
          <div class="select is-fullwidth">
            <select @change="optionSelected('category', $event)">
              <option selected>All</option>
              <option v-for="(value, key) in categories" :key="key">{{key}}</option>
            </select>
          </div>
        </div>
      </label>

      <label class="label">Difficulty:
        <div class="control">
          <div class="select is-fullwidth">
            <select @change="optionSelected('difficulty', $event)">
              <option selected>Any</option>
              <option v-for="(value, key) in difficulties" :key="key">{{value}}</option>
            </select>
          </div>
        </div>
      </label>

      <button @click="initQuiz" class="button is-primary">Start</button>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import * as options from '@/options';

export default {
  data() {
    return {
      min: options.questionsCount.min,
      max: options.questionsCount.max,
      categories: options.categories,
      difficulties: options.difficulties,
    };
  },

  methods: {
    initQuiz() {
      this.fetchData(this);
    },
    optionSelected(option, e) {
      this.chooseOption({ option, value: e.target.value });
    },
    ...mapActions(['chooseOption', 'resetQuiz', 'fetchData']),
  },

  created() {
    this.resetQuiz();
  },
};
</script>


<style scoped>

</style>
