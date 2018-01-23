/* eslint-disable */
import * as options from '@/options';

export function generateURL(setup) {
  let generatedURL = `https://opentdb.com/api.php?amount=${setup.numberOfQuestions}`;

  if (setup.category !== 'All') {
    generatedURL += `&category=${options.categories[setup.category]}`;
  }

  if (setup.difficulty !== 'Any') {
    generatedURL += `&difficulty=${setup.difficulty}`;
  }

  return generatedURL;
}


export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
