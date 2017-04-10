function ETL() {

}

ETL.prototype.transform = function( oldData ) {
  var newData = {}

  for ( prop in oldData ) {
    var individualArray = oldData[prop]

    while ( individualArray.length > 0 ) {
      var letter = individualArray.pop().toLowerCase()

      newData[letter] = Number(prop)
    }
  }
  return newData
}

module.exports = ETL
