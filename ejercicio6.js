function paperwork(n, m) {

    let result = 0

    if(n < 0 || m < 0){
        return 0
    }else{
        result = n * m
    }

    return result

}

console.log(paperwork(5, 5 ))