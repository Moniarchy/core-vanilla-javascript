function Anagram( str ) {
  this.str = str,
  this.letterHash = {}
}

Anagram.prototype.matches = function( array ) {
  // loop through all chars in str and mark # of time each letter apears
  let foundAnagrams = []
  this.hashLetterCount()
  console.log(this.letterHash);
  console.log('the array we passed in:', array);
  // loop through all of the words we are checcking to see if they
  // are anagrams of this.str
  for( let word in array ) {
    if( this.isAnagram( word ) ){
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
  
}

let myAnagram = new Anagram( 'hello' )
console.log( myAnagram.matches( ['elloh'] ) );
