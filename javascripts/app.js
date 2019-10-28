class Rover {
  constructor(direction){
    this.direction = direction;
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
  
  turnRight() {
    switch(this.direction){
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
    console.log(`Rover now faces ${this.direction}.`);
  }

  moveForward(){ 
    switch (rover.direction){ 
      case "N": 
      rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});
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

let r1 = new Rover("N");

console.log(r1);

r1.turnLeft();
