class Rover {
  constructor(){
    direction:'N'
  }

  turnLeft(newDirection) {
    this.direction = newDirection;
  }
  
  turnRight(newDirection) {
    this.direction = newDirection;
  }

  moveForward(rover){ 
    switch (rover.direction){ 
      case "N": rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break; 
      case "E": rover.x+=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break;
      case "S": rover.y+=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break;
      case "W": rover.x-=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break; 
      default: console.log('Error');
      break; 
    } 
  }

  moveBackward(rover){
    switch (rover.direction){ 
      case "N": rover.y+=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break; 
      case "E": rover.x-=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break;
      case "S": rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});
      break;
      case "W": rover.x+=1;rover.travelLog.push({x:rover.x , y:rover.y}); 
      break; 
      default: console.log('Error');
      break; 
    } 
  }

}