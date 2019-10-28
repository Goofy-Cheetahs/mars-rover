class Rover {
  constructor(direction){
<<<<<<< HEAD
    this.direction = direction;
=======
    this.direction = 'N'
    this.x = 0
    this.y = 0
>>>>>>> cc37523bcc18af5bccf06ce05e3dde1ff103a016
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

  moveForward(){ 
<<<<<<< HEAD
    switch (rover.direction){ 
      case "N": 
      rover.y-=1;rover.travelLog.push({x:rover.x , y:rover.y});
=======
    switch (this.direction){ 
      case "N": this.y-=1;this.travelLog.push({x:this.x , y:this.y});
>>>>>>> cc37523bcc18af5bccf06ce05e3dde1ff103a016
      break; 
      case "E": this.x+=1;this.travelLog.push({x:this.x , y:this.y});
      break;
      case "S": this.y+=1;this.travelLog.push({x:this.x , y:this.y});
      break;
      case "W": this.x-=1;this.travelLog.push({x:this.x , y:this.y});
      break; 
      default: console.log('Error');
      break; 
    } 
  }

  moveBackward(){
    switch (this.direction){ 
      case "N": this.y+=1;this.travelLog.push({x:this.x , y:this.y});
      break; 
      case "E": this.x-=1;this.travelLog.push({x:this.x , y:this.y});
      break;
      case "S": this.y-=1;this.travelLog.push({x:this.x , y:this.y});
      break;
      case "W": this.x+=1;this.travelLog.push({x:this.x , y:this.y}); 
      break; 
      default: console.log('Error');
      break; 
    } 
  }
}

let r1 = new Rover("N");

console.log(r1);

r1.turnLeft();
