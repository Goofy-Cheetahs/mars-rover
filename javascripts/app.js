class Rover {
  constructor(direction){
    this.direction = 'N'
    this.x = 0
    this.y = 0
    this.travelLog = [{x:0,y:0}]
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
    switch (this.direction){ 
      case "N": this.y-=1;this.travelLog.push({x:this.x , y:this.y});
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

  // command
  commands(command){
    console.log('commands was called!');

    for (let i = 0; i < command.length; i++) {
      switch (command[i]) {
        case 'f': moveForward(rovers);
        break;
        case 'b': moveBackward(rovers);
        break;
        case 'l': turnLeft(rovers);
        break;
        case 'r': turnRight(rovers);
        break;
        default:
          console.log('invalid command');
          // continue;
          break;
      }
    }
  }
}

let r1 = new Rover('N');

console.log(r1);

r1.turnLeft();
r1.turnLeft();
r1.moveBackward();
