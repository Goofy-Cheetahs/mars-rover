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

}