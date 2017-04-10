function Node( data ) {
  this.data = data
  this.next = null
  this.prev = null
}

function LinkedList() {
  this.top = null
  this.length = 0
}

LinkedList.prototype.push = function( data ) {
  var newNode = new Node( data )

  if ( this.length === 0 ) {
    this.top = newNode
    this.length++
  } else if ( this.length > 0 ) {
    this.top.next = newNode
    newNode.prev = this.top
    this.top = newNode
    this.length++
  }
}

LinkedList.prototype.pop = function() {
  var nodeToBePopped = this.top.data

  this.top = this.top.prev
  if ( this.length > 1 ) {
     this.top.next = null
  }
   this.length--
   return nodeToBePopped
}

LinkedList.prototype.shift = function() {
  var temp = this.top

  while ( temp.prev ) {
    temp = temp.prev
  }

  var nodeToBeShifted = temp
  temp = nodeToBeShifted.next
  if ( this.length > 1 ) {
    temp.prev = null
  }
  this.length--
  return nodeToBeShifted.data
}

LinkedList.prototype.unshift = function( data ) {
  var newNode = new Node( data )
  var temp = this.top

  if ( this.top === null ) {
    this.top = newNode
    this.length++
  } else if ( this.length === 1 ) {
    temp.prev = newNode
    newNode.next = temp
    this.length++
  } else {
    while ( temp.prev ) {
      temp = temp.prev
    }
      newNode.next = temp
      temp.prev = newNode
      this.length++
    }
  }

LinkedList.prototype.count = function() {
  return this.length
}

LinkedList.prototype.delete = function( data ) {
  var temp = this.top

  while ( temp.prev && temp.data !== data ) {
    temp = temp.prev
    console.log('temp.prev', temp)
  }


  //loop through until we find the node whose data matches the data from the parameter
  //set its prev to its next
  //set its next to its prev
}

module.exports = LinkedList

var chain = new LinkedList
//
chain.unshift(6)
chain.unshift(9)
chain.unshift(12)
chain.unshift(15)
chain.delete(9)

// console.log( 'LIIIIIIIIST', chain )
// console.log('YOOOOOO', chain.top.prev.prev)
