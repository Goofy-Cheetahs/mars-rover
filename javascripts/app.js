class Rover {
  constructor(){
    direction:'N'
  }

  turnLeft() {
  switch(this.direction){
    case "N":
      this.direction = "W";
      break;
    case "W":
      this.direction = "S";
      break;
    case "S":
      this.direction = "E";
      break;
    case "E":
      this.direction = "N";
      break;
    }
  console.log(`Rover now faces ${this.direction}.`);
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