// grid
const grid = [
    [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},{x:0,y:6},{x:0,y:7},{x:0,y:8},{x:0,y:9}],
    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6},{x:1,y:7},{x:1,y:8},{x:1,y:9}],
    [{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:2,y:5},{x:2,y:6},{x:2,y:7},{x:2,y:8},{x:2,y:9}],
    [{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:3,y:4},{x:3,y:5},{x:3,y:6},{x:3,y:7},{x:3,y:8},{x:3,y:9}],
    [{x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6},{x:4,y:7},{x:4,y:8},{x:4,y:9}],
    [{x:5,y:0},{x:5,y:1},{x:5,y:2},{x:5,y:3},{x:5,y:4},{x:5,y:5},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:5,y:9}],
    [{x:6,y:0},{x:6,y:1},{x:6,y:2},{x:6,y:3},{x:6,y:4},{x:6,y:5},{x:6,y:6},{x:6,y:7},{x:6,y:8},{x:6,y:9}],
    [{x:7,y:0},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:7,y:7},{x:7,y:8},{x:7,y:9}],
    [{x:8,y:0},{x:8,y:1},{x:8,y:2},{x:8,y:3},{x:8,y:4},{x:8,y:5},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:8,y:9}],
    [{x:9,y:0},{x:9,y:1},{x:9,y:2},{x:9,y:3},{x:9,y:4},{x:9,y:5},{x:9,y:6},{x:9,y:7},{x:9,y:8},{x:9,y:9}]
  ]

// rover
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
      case "N": 
      this.y-=1;
      if (this.y<-10 || this.y>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break; 
      case "E": 
      this.x+=1;
      if (this.x<-10 || this.x>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break;
      case "S": 
      this.y+=1;
      if (this.y<-10 || this.y>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break;
      case "W": 
      this.x-=1;
      if (this.x<-10 || this.x>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break; 
      default: console.log('Error');
      break; 
    } 

    console.log(`Rover position (${this.x}, ${this.y}).`);
  }

  moveBackward(){
    switch (this.direction){ 
      case "N": 
      this.y+=1;
      if (this.y<-10 || this.y>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break; 
      case "E":
      this.x-=1;
      if (this.x<-10 || this.x>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break;
      case "S": 
      this.y-=1;
      if (this.y<-10 || this.y>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y});
      break;
      case "W":
      this.x+=1;
      if (this.x<-10 || this.x>10){
        console.log("rover off the Map, sorry!");break;
      }
      this.travelLog.push({x:this.x , y:this.y}); 
      break; 
      default: console.log('Error');
      break; 
    } 
    console.log(`Rover position (${this.x}, ${this.y}).`);
  }

  // command
  commands(command){
    console.log('commands was called!');

    for (let i = 0; i < command.length; i++) {
      switch (command[i]) {
        case 'f': 
          this.moveForward();
          break;
        case 'b': 
          this.moveBackward();
          break;
        case 'l': 
          this.turnLeft();
          break;
        case 'r': 
          this.turnRight();
          break;
        default:
          console.log('invalid command');
          // continue;
          break;
      }
    }
  }
}

class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function createObstacles(numObstacles) {
  let obstacleArr = [];

  for(let i=0; i<numObstacles; i++){
    let x = Math.floor(Math.random()*11);
    let y = Math.floor(Math.random()*11);
    let obs = new Obstacle(x, y);
    obstacleArr.push(obs);
  }

  return obstacleArr;
}





/******* testing code *******/
let o1 = new Obstacle(1, 1);

console.log(o1);

let arr = createObstacles(4);
console.log(arr);


let r1 = new Rover("N");

console.log(r1);

r1.turnRight();
r1.turnRight();
r1.turnLeft();
r1.moveBackward();
r1.moveForward();
r1.commands("rffrfflb");

/******* testing code *******/
