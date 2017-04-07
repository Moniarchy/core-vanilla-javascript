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

}

LinkedList.prototype.unshift = function() {

}

LinkedList.prototype.count = function() {
  return this.length
}

module.exports = LinkedList

var chain = new LinkedList

console.log(chain.push(5))
