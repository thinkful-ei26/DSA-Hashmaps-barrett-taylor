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
  //inspect the string itself
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

//have an array of words and compare the words to the different permutations of each word
//store each match (for each word), in its own array 
// push each array into an empty array



//place each letter of the first word into a hashmap. 
//place each letter of the new word into the same hashmap 
//compare original size before push to size after push 
// if the size is the same then push new word into an array. 

// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

//variables:two empty arrays,  original word, new word, original size, new size 
// push original word into emptyArray1
// if sizes are equal, push new word into emptyArray1 
// if there aren't any more words in the loop, push emptyArray1 into emptyArray2 
//remove matching items from original array
//move onto the next word. 

const anagramGrouping = (array) => {
  let groupingArray = []; 
  let resultArray =[];
  for(let i=0; i<array.length; i++) {
    let grouping = new Map(); 
    let splitWord = array[i].split("")
    console.log(splitWord);
    splitWord.forEach(letter => {
      grouping.set(letter);
    });
    console.log(grouping);
  }
}


anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
// console.log(findPalindrome('acecarr'));
// // console.log(findPalindrome('north'));
// console.log(ticks);
// console.log(anagrams('cars'));