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
  var node = new Node( value )
  //if this node is the first thing in the list
    //add it to the list,
    //increase the length  of list by one
    //do not change this.prev or this.next
  //if node is not first node in list
    //update this.next pointer of prev node to point to new node
    //insert new node
    //increase length of list by one
    //change this.prev to point to previous node

}

LinkedList.prototype.pop = function() {

}

LinkedList.prototype.shift = function() {

}

LinkedList.prototype.unshift = function() {

}

module.exports = LinkedList
