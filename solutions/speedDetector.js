function speedDetecter(speed) {
    let speedLimit = 70;
    let demeritPoint = 5;
    //check if the speed is greater that the speed limit
    if (speed <= speedLimit) {
      return 'Ok';
    } else {

      let points = Math.floor((speed - speedLimit) / demeritPoint); 
      if(points > 12 ){
        console.log(`License suspended`);
      } else {
        return(`Points : ${points}`);
      }
    }
  }
  console.log(speedDetecter(90));