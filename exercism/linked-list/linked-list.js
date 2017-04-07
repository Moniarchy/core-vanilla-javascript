function Node( value ) {
  this.value = value
  this.next = null
  this.prev = null
}

function LinkedList() {
  this.top = null
  this.length = 0
}

LinkedList.prototype.push = function( value ) {
  var newNode = new Node( value )

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
//var nodeToBePopped = this.top.data
    //  this.top = this.top.next
    //  this.size--
    //  return nodeToBePopped
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
