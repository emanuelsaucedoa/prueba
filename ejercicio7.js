function position(letter){

    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let position = 0

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === letter){

            position = i + 1
            return 'Position of alphabet: ' + position
        }
        
    }

    }

console.log(position('a'))