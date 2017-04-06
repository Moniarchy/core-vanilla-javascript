function Robot() {
  this.letterMap = {
    1: 'A', 2: 'B', 3: C, 4: D, 5: E, 6: F, 7: G, 8: H, 9: I, 10: J, 11: K, 12: L,
    13: M, 14: N, 15: O, 16: P, 17: Q, 18: R, 19: S, 20: T, 21: U, 22: V, 23: W,
    24: X, 25: Y, 26: Z
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
  if ( Math.floor( Math.random() * 1000 ) < 100 ) {
    return Math.floor( Math.random() * 1000 ) * 10
  } else {
  return Math.floor( Math.random() * 1000 )
  }
}
//sometimes numbers come back as two digits
