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

if ( this.length > 1 ) {
     this.top = this.top.prev
     this.top.next = null
     this.length--
     return nodeToBePopped
   } else if ( this.length === 1 ) {
     this.top = null
     this.length--
     return nodeToBePopped
   }
}

LinkedList.prototype.shift = function() {
  var nodeToBeShifted
  var temp = this.top

  while ( temp.prev ) {
    temp = temp.prev

    if ( temp.prev === null ) {
      nodeToBeShifted = temp.data
      console.log('temp', nodeToBeShifted)
      // temp = temp.next
      this.length--
      return nodeToBeShifted
    }
    }
  //start at top
  //go through list and access prev until we find the node where prev === null
  //set that node's next to have a prev of null
  //return that node that was removed
}

LinkedList.prototype.unshift = function() {

}

LinkedList.prototype.count = function() {
  return this.length
}

module.exports = LinkedList

var chain = new LinkedList

chain.push(6)
chain.push(9)
chain.push(12)
chain.push(15)

console.log( chain.shift())
