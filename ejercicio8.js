function sumArray(array) {

    let min = 0
    let max = 0
    let sum = 0

    if(!Array.isArray(array) || array.length === 0 || array.length === 1){
        return 0
    }

    min = Math.min(...array)
    max = Math.max(...array)

    for (let i = 0; i < array.length; i++) {

            sum = sum + array[i]
 
    }

    sum = sum - (min + max)

    return sum

}

console.log(sumArray([ 0, 1, 6, 10, 10 ]))