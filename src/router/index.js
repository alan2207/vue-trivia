import Router from 'vue-router';
import Home from '@/components/Home';
import Setup from '@/components/Setup';
import Quiz from '@/components/Quiz';
import Result from '@/components/Result';
import Vue from 'vue';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/setup',
      name: 'Setup',
      component: Setup,
    },

    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
  mode: 'history',
});
