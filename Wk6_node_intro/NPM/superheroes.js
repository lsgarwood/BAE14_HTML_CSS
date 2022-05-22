const superheroes = require('superheroes');
const supervillians = require('supervillains');
const dogNames = require('dog-names');
const yesNoWords = require('yes-no-words');

const superName = superheroes.random();
const villainName = supervillians.random();
const dogName = dogNames.maleRandom();
const noWord = yesNoWords.noRandom();
const yesWord = yesNoWords.yesRandom();

let story1 = (

    `Once upon a time there was a superhero called ${superName}, who had a super cute, itsy bitsy, but super strong dog called ${dogName}. One day when they were walking in the park, a super ugly, supervillain called ${villainName} flew past at top speed and stole ${superName}'s tiny floof ball. ${superName} cried out ${noWord}..... But ${villainName}, being such a beast, just scooched off screaming ${yesWord}`

);

console.log(story1);



