function Robot() {
  this.letterMap = {
    1: a, 2: b, 3: c,
  }
  this.name
}

Robot.prototype.generateName() {
   this.name = this.generateRandomLetters() + this.generateRandomNumbers()

  //name is a combo of 2 letters and 3 numbers
  //generate letters function (AB)
  //generate numbers function (830)
  //concat results of these two functions AB830
  //set results equal to this.name
}

Robot.prototype.generateRandomLetters() {
  return this.letterMap[randomlyGeneratedNumber] + this.letterMap[randomlyGeneratedNumber]
  //generate two random letters
}

Robot.prototype.generateRandomNumbers() {
  return Math.floor( Math.random() * 1000 )
  //sometimes numbers come back as two digits
}
