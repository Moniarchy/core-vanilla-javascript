function BinarySearch( arr ) {
  this.arr = arr
}

BinarySearch.prototype.indexOf = function( value, myArray=this.arr ) {
  // check to see if array is sorted
  for(var i = 0; i < myArray.length; i++) {
    if (myArray[i] > myArray[i+1]) {
      return 'UNSORTED ARRAY'
    }
  }

  var midpoint = Math.floor((myArray.length - 1) / 2)
  if ( value === myArray[midpoint] ) {
    return myArray[midpoint]
  } else if ( value < myArray[midpoint] ) {
    myArray = myArray.slice( 0, midpoint-1   )
    debugger
    return this.indexOf( value, myArray )
  } else {
    myArray = myArray.slice( midpoint+1, myArray.length - midpoint )
    return this.indexOf( value, myArray )
  }
}

var sortedArray = [1, 2, 3, 4, 5, 6];

var newthing = new BinarySearch(sortedArray)

console.log( newthing.indexOf(5))
