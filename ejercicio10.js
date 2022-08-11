function enough(cap, on, wait) {

    let available = cap - on
    
    let canTake = available - wait

    if(canTake > 0 || canTake === 0){
        return 0 
    }else if(canTake < 0){
        return -canTake

    }
 
  }

  console.log(enough(100, 60, 0))