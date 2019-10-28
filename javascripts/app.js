class Rover {
  constructor(){
    direction:'N'
  }
<<<<<<< HEAD
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
=======

  turnLeft(newDirection) {
    this.direction = newDirection;
>>>>>>> 17ba027eb636a9c350089f5ad905ba95455fed29
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