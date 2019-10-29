// /**
//  * Obstacle class
//  * create an obstacle with position (x,y)
//  */
// class Obstacle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// /**
//  * Creates n amount of obstacles
//  */
// function createObstacles(numObstacles) {
//     let obstacleArr = [];
//     for(let i=0; i<numObstacles; i++){
//     let x = Math.floor(Math.random()*11);
//     let y = Math.floor(Math.random()*11);
//     let obs = new Obstacle(x, y);
//     obstacleArr.push(obs);
//   }
//   return obstacleArr;
// }

// /**
//  * Rover class
//  */
// class Rover {
//   /**
//    * Rover constructor
//    */
//   constructor(direction){
//     this.direction = 'N'
//     this.x = 0
//     this.y = 0
//     this.travelLog = [{x:0,y:0}]
//   }

//   /**
//    * Check if the rover is out of bounds
//    */
//   checkBoundaries(){
//     if (this.x>10 || this.y>10){
//       console.log("rover off the boundaries. sorry!"); return;
//     }
//   }

//   /**
//    * Check if the rover hits an obstacles
//    */
//   checkObstacles(){
//     for(let i=0;i<obstacleArr.length;i++){
//       if(this.x==obstacleArr[i].x ||this.y==obstacleArr[i].y) {
//         console.log("the rover crashed to an obstacle!");
//         return;
//       } 
//     }
//   }

//   /**
//    * Turn the rover 90 degress to the left
//    */
//   turnLeft() {
//   switch(this.direction){
//     case "N":
//       this.direction = "W";
//       break;
//     case "W":
//       this.direction = "S";
//       break;
//     case "S":
//       this.direction = "E";
//       break;
//     case "E":
//       this.direction = "N";
//       break;
//     }
//     console.log(`Rover now faces ${this.direction}.`);
//   }
  
//   /**
//    * Turn the rover 90 degrees to the right
//    */
//   turnRight() {
//     switch(this.direction){
//       case "N":
//         this.direction = "E";
//         break;
//       case "E":
//         this.direction = "S";
//         break;
//       case "S":
//         this.direction = "W";
//         break;
//       case "W":
//         this.direction = "N";
//         break;
//     }
//     console.log(`Rover now faces ${this.direction}.`);
//   }

//   /**
//    * Move the rover one position forward
//    */
//   moveForward(){ 
//     switch (this.direction){ 
//       case "N": 
//       this.y-=1;
//       this.checkBoundaries();
//       this.checkObstacles();
//       this.travelLog.push({x:this.x , y:this.y});
//       break; 
//       case "E": 
//       this.x+=1;
//       this.checkBoundaries();
//       this.checkObstacles();
//       this.travelLog.push({x:this.x , y:this.y});
//       break;
//       case "S": 
//       this.y+=1;
//       this.checkBoundaries();
//       this.checkObstacles();
//       this.travelLog.push({x:this.x , y:this.y});
//       break;
//       case "W": 
//       this.x-=1;
//       this.checkBoundaries();
//       this.checkObstacles();
//       this.travelLog.push({x:this.x , y:this.y});
//       break; 
//       default: console.log('Error');
//       break; 
//     } 

//     console.log(`Rover position (${this.x}, ${this.y}).`);
//   }

//   /**
//    * Move the rover one position backward
//    */
//   moveBackward(){
//     switch (this.direction){ 
//       case "N": 
//         this.y+=1;
//         this.checkBoundaries();
//         this.checkObstacles();
//         this.travelLog.push({x:this.x , y:this.y});
//         break; 
//       case "E":
//         this.x-=1;
//         this.checkBoundaries();
//         this.checkBoundaries();
//         this.travelLog.push({x:this.x , y:this.y});
//         break;
//       case "S": 
//         this.y-=1;
//         this.checkBoundaries();
//         this.checkObstacles();
//         this.travelLog.push({x:this.x , y:this.y});
//         break;
//       case "W":
//         this.x+=1;
//         this.checkBoundaries();
//         this.checkObstacles();
//         this.travelLog.push({x:this.x , y:this.y}); 
//         break; 
//       default: console.log('Error');
//       break; 
//     } 
//     console.log(`Rover position (${this.x}, ${this.y}).`);
//   }

//   /**
//    * Pass an array of commands to the rover
//    */
//   commands(command){
//     console.log('commands was called!');

//     for (let i = 0; i < command.length; i++) {
//       switch (command[i]) {
//         case 'f': 
//           this.moveForward();
//           break;
//         case 'b': 
//           this.moveBackward();
//           break;
//         case 'l': 
//           this.turnLeft();
//           break;
//         case 'r': 
//           this.turnRight();
//           break;
//         default:
//           console.log('invalid command');
//           // continue;
//           break;
//       }
//     }
//   }
// }


window.onload = function(){
  let theRover = document.createElement('img')

  // console.log(theRover)

  theRover.setAttribute('src','./img/mars-rover.png')
  // console.log(theRover)
  theRover.id = 'rover';

  let obstacle1 = document.createElement('img')
  obstacle1.setAttribute('src','./img/rock.jpeg')
  obstacle1.id = 'rover';
  let obstacle1Pos = document.querySelector(`.row${9} > .col${9}`).appendChild(obstacle1);  

  let obstacle2 = document.createElement('img')
  obstacle2.setAttribute('src','./img/rock.jpeg')
  obstacle2.id = 'rover';
  let obstacle2Pos = document.querySelector(`.row${5} > .col${7}`).appendChild(obstacle2);  

  let obstacle3 = document.createElement('img')
  obstacle3.setAttribute('src','./img/rock.jpeg')
  obstacle3.id = 'rover';
  let obstacle3Pos = document.querySelector(`.row${9} > .col${2}`).appendChild(obstacle3);  

  let obstacle4 = document.createElement('img')
  obstacle4.setAttribute('src','./img/rock.jpeg')
  obstacle4.id = 'rover';
  let obstacle4Pos = document.querySelector(`.row${3} > .col${2}`).appendChild(obstacle4);  
  
  let obstacle5 = document.createElement('img')
  obstacle5.setAttribute('src','./img/rock.jpeg')
  obstacle5.id = 'rover';
  let obstacle5Pos = document.querySelector(`.row${5} > .col${9}`).appendChild(obstacle5);  

  let x = 1;
  let y = 1;

<<<<<<< HEAD
  let roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);
  
  
  const theObstacle=document.createElement('div');
  theObstacle.id="obstacle";
  let b=Math.floor(Math.random()*9)+2;
  let c=Math.floor(Math.random()*9)+2;  
  let obstaclePosition = document.querySelector(`.row${b} > .col${c}`).appendChild(theObstacle);
  
=======
  let roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);  
>>>>>>> 99844b667f9861995cd502800c16660f5cc4f4fc


  document.addEventListener('keydown', logKey);

  function logKey(e) {
    // console.log(e);
    console.log(e.key);

    switch(e.key) {
      case "ArrowRight":
        y++;
        roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);
        break;
      case "ArrowLeft":
        y--;
        roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);
        break;
      case "ArrowDown":
        x++;
        roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);
        break;
      case "ArrowUp":
        x--;
        roverPosition = document.querySelector(`.row${x} > .col${y}`).appendChild(theRover);
        break;
    }
  }

  

}







/******* testing code *******/
// let o1 = new Obstacle(1, 1);

// console.log(o1);

// let arr = createObstacles(4);
// console.log(arr);


// let r1 = new Rover("N");

// console.log(r1);

// r1.turnRight();
// r1.turnRight();
// r1.turnLeft();
// r1.moveBackward();
// r1.moveForward();
// r1.commands("rffrfflb");


/******* testing code *******/
//document.querySelector("body > h1").innerHTML = '<h1 class="hi">hi</h1>'
