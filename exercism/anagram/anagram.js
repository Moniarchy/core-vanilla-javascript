function Anagram( str ) {
  this.str = str.toLowerCase(),
  this.letterHash = {}
}

Anagram.prototype.matches = function( ...input ) {
  // loop through all chars in str and mark # of time each letter apears
  let foundAnagrams = []
  this.hashLetterCount()

  // loop through all of the words we are checcking to see if they
  // are anagrams of this.str
  if ( input[0] instanceof Array ) {
    
    for( let word of input ) {
      console.log('word', word)
      if( this.isAnagram( word )) {
        foundAnagrams.push(word)
      }
    }
  }

  return foundAnagrams
}

Anagram.prototype.hashLetterCount = function() {
  for( let letter of this.str ){
    if( this.letterHash[letter] === undefined ) {
      this.letterHash[letter] = 1
    } else {
      this.letterHash[letter]++
    }
  }
}

Anagram.prototype.isAnagram = function( word ) {
  word = word.toLowerCase()
  if ( word === this.str ) {
    return false
  }
  if ( word.length !== this.str.length ) {
    return false
  }
  for( let letter of word ) {
    console.log('word', word)
    if( this.letterHash[letter] === undefined ) {
      return false
    } else {
      this.letterHash[letter]--
    }
  }
  for( let letter in this.letterHash ) {
    if ( this.letterHash[letter] > 0 ) {
      return false
    }
  }
  return true
  //loop through letterHash.
  //if there are any values that are still greater than 0, return false
  //word = the word at any index of the array
  //check each of those words against this.str
}

let myAnagram = new Anagram( 'hello' )
myAnagram.matches( ['olleh', 'goodbye'])

module.exports = Anagram
