'use strict';

// Write an algorithm to check whether any permutation of a string is a palindrome. 
// Given the string "acecarr", the algorithm should return true, because the letters 
// in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast,
// given the word "north", the algorithm should return false, because there's no way
// to rearrange those letters to be a palindrome.


// find all permutations
// add each to map
// reverse all permutations, compare each to values in map

// function call anagram(string)

let ticks = 0;
function findPalindrome(string) {
  let permutations = anagrams(string);
  let value, key;
  let map = new Map();

  permutations.forEach((i) => {
    ticks++;
    key = i;
    value = reverse_tail(i);
    map.set(key, value);
  });

  for (let o of map) {
    ticks++;
    if (o[0] === o[1]) {
      return true;
    }
  }
  
  return false;
}

function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    ticks++;
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

function anagrams(word) {

  let multiAnagrams =[];

  if(word.length === 1) {
    multiAnagrams.push(word);
    return multiAnagrams;
  }

  for(let i=0; i< word.length; i++) {
    ticks++;
    const firstChar = word[i];
    const charsLeft = word.substring(0,i) + word.substring(i+1);
    const innerAnagrams = anagrams(charsLeft);

    for(let j=0; j < innerAnagrams.length; j++){
      ticks++;
      multiAnagrams.push(firstChar + innerAnagrams[j]);
    }
  }
  // console.log(multiAnagrams.length);
  return multiAnagrams;
}

console.log(findPalindrome('acecarr'));
// console.log(findPalindrome('north'));
console.log(ticks);