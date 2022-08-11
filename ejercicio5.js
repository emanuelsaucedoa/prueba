function reverseList(list) {

    let array = []

    if (Array.isArray(list)) {

        for (let i = list.length -1; i >= 0; i--) {
            array.push(list[i])

        }

    }

    return array

}

console.log(reverseList([1, 2, 3, 4]))