function Anagram( str ) {
  this.str = str.toLowerCase(),
  this.letterHash = {}
}

Anagram.prototype.matches = function( ...input ) {
  if( typeof input[0] === 'object' ) {
    input = input[0]
  }
  let foundAnagrams = []
  this.hashLetterCount()

  for( let word of input ) {
    console.log('word', word)
    if( this.isAnagram( word )) {
      foundAnagrams.push(word)
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
}

module.exports = Anagram
