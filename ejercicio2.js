function addBinary(a, b) {

    let sum = a + b
    const array = []

    while(sum !== 0){
        let rest = sum % 2
        sum = Math.floor(sum / 2)
        array.push(rest)
    }

    return array.reverse().join('')

}

console.log(addBinary(1, 2))