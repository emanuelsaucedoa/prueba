function getSum(a, b) {

    let result = a

    if (a < b) {
        for (let i = a; i <= b; i++) {

            if (i !== a) {
                result = result + i
            }

        }
    } else if (b < a) {
        result = b
        for (let i = b; i <= a; i++) {

            if (i !== b) {
                result = result + i
            }
        }
    }

    return result

}

// 5 + 6 + 7 + 8 + 9 + 10 = 45

console.log(getSum(5, 10))