class Rover {
  constructor(){
    direction:'N'
  }
}
// ======================

// moving part
function moveForward(rover){
  console.log("moveForward was called")
}
function moveForward(rover){ console.log("moveForward was called") switch (rover.direction){ case "N": rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});break; case "E": rover.x+=1;rover.travelLog.push({x:rover.x , y:rover.y});break;
case "S": rover.y+=1;rover.travelLog.push({x:rover.x , y:rover.y});break;
case "W": rover.x-=1;rover.travelLog.push({x:rover.x , y:rover.y});break; default: console.log('Error');break; } }

function moveBackward(rover){ console.log("moveBackward was called") switch (rover.direction){ case "N": rover.y+=1;rover.travelLog.push({x:rover.x , y:rover.y});break; case "E": rover.x-=1;rover.travelLog.push({x:rover.x , y:rover.y});break;
case "S": rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});break;
case "W": rover.x+=1;rover.travelLog.push({x:rover.x , y:rover.y});break; default: console.log('Error');break; } }

// end moving part

  turnLeft() {

  turnLeft(newDirection) {
    this.direction = newDirection;

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