function makeNegative(num) {

    let result = 0

    if(num < 0){
        return num
    }

    result = num - (num * 2)

    return result

  }

  console.log(makeNegative(1))