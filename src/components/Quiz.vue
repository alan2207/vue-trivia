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

     <audio class="audio" id="correct" controls>
      <source src="../assets/audio/correct.mp3" type="audio/mp3">
    </audio>

    <audio class="audio" id="wrong" controls>
      <source src="../assets/audio/wrong.mp3" type="audio/mp3">
    </audio>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import { XmlEntities } from 'html-entities';

const entities = new XmlEntities();

let correctAudio;
let wrongAudio;


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
    correctAudio = document.getElementById('correct');
    wrongAudio = document.getElementById('wrong');
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

.audio {
  display: none;
}
</style>
