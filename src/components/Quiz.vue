<template>
  <div class="bordered">
    <h2>Question: {{$store.state.currentQuestionIndex}}</h2>
    <div v-if="$store.state.questions.length > 0">
      <h3 class="title is-3">{{entities.decode(current.question)}}</h3>
      <p class="option"
      :key="question"
      @click="checkAnswer($event, $store.state)"
      v-for="question in current.options">{{entities.decode(question)}}</p>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import { XmlEntities } from 'html-entities';

const entities = new XmlEntities();

const correctAudio = new Audio('/static/audio/correct.mp3');
const wrongAudio = new Audio('/static/audio/wrong.mp3');


export default {
  data() {
    return {
      entities,
    };
  },
  computed: {
    current() {
      return this.$store.state.questions[this.$store.state.currentQuestionIndex - 1];
    },
  },
  methods: {
    ...mapActions(['fetchData', 'increment']),
    checkAnswer(e, state) {
      if (state.currentQuestionIndex < state.setup.numberOfQuestions) {
        if (e.target.textContent === this.current.correct_answer) {
          correctAudio.play();
          this.increment('score');
        } else {
          wrongAudio.play();
        }
        this.increment('currentQuestionIndex');
      } else {
        if (e.target.textContent === this.current.correct_answer) {
          correctAudio.play();
          this.increment('score');
        } else {
          wrongAudio.play();
        }
        setTimeout(() => {
          this.$router.push({ name: 'Result' });
        }, 450);
      }
    },
  },
  mounted() {
    if (this.$store.state.questions.length === 0) {
      this.$router.push({ name: 'Setup' });
    }
  },
};
</script>


<style scoped>

.option {
  font-size: 24px;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(85, 78, 90, 0.75);
  -moz-box-shadow:    1px 1px 4px 0px rgba(85, 78, 90, 0.75);
  box-shadow:         1px 1px 4px 0px rgba(85, 78, 90, 0.75);
  margin: 20px;
}

.option:hover {
  background: #f4f6f9;
  cursor: pointer;
}

</style>
