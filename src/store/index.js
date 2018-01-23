import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { generateURL, shuffle } from '@/helpers';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    score: 0,
    questions: null,
    currentQuestionIndex: 1,
    setup: {
      numberOfQuestions: 10,
      category: 'All',
      difficulty: 'Any',
    },
  },
  mutations: {
    fetchQuestions(state, payload) {
      state.questions = payload;
    },
    setCurrentQuestion(state, payload) {
      state.currentQuestion = payload;
    },
    increment(state, payload) {
      state[payload] += 1;
    },
    reset(state) {
      state.currentQuestionIndex = 1;
      state.score = 0;
      state.setup = {
        numberOfQuestions: 10,
        category: 'All',
        difficulty: 'Any',
      };
      state.questions = [];
    },
    selectOption(state, payload) {
      state.setup[payload.option] = payload.value;
    },
  },
  actions: {
    chooseOption({ commit }, payload) {
      commit('selectOption', payload);
    },
    resetQuiz({ commit }) {
      commit('reset');
    },
    fetchData({ commit, state }, context) {
      const url = generateURL(state.setup);

      axios.get(url)
        .then((data) => {
          if (data.data.response_code === 1) {
            return;
          }
          context.$router.push({ name: 'Quiz' });

          const fetchedQuestions = data.data.results.map(question => ({
            ...question,
            options: shuffle(question.incorrect_answers.concat(question.correct_answer)),
          }));

          commit('fetchQuestions', fetchedQuestions);
        });
    },
    increment({ commit }, payload) {
      commit('increment', payload);
    },
  },
});

export default store;
