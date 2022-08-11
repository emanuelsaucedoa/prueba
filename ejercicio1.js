function expressionMatter(a, b, c) {

  const array = []

  let optionOne = a + b + c
  let optionTwo = a * b * c
  let optionThree = a + b * c
  let optionFour = a * b + c
  let optionFive = (a + b) * c
  let optionSix = a * (b + c)

  array.push(optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix)

  let result = Math.max(...array)
  return result

}

console.log(expressionMatter(2, 2, 2))



