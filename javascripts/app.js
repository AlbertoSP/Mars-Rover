var myRover = {
position: [0,0],
direction: "N",
travelLog: []
};
var dir = myRover.direction;
 function turnLeft(myRover){
  console.log("turnLeft was called!");
  switch (dir) {
        case 'N':
            dir = 'W';
            break;
        case 'S':
            dir = 'E';
            break;
        case 'E':
            dir = 'N';
            break;
        case 'W':
            dir = 'S';
            break;
    }
    console.log('turnleft / dirección reasignada: ' + dir);
    createHistory();
}
function turnRight(myRover){
 console.log("turnRight was called!");
 switch (dir) {
       case 'N':
           dir = 'E';
           break;
       case 'S':
           dir = 'W';
           break;
       case 'E':
           dir = 'S';
           break;
       case 'W':
           dir = 'N';
           break;
   }
   console.log('turnRight / dirección reasignada: ' + dir);
createHistory();
}
var roverX = myRover.position[0];
var roverY = myRover.position[1];

function moveForward(myRover) {
    console.log("moveForward was called");
    if (dir === 'N' && roverY < 10) {
        roverY += 1;
    } else if (dir === "S" && roverY > 0) {
        roverY -= 1;
    } else if (dir === "E" && roverX < 10) {
        roverX += 1;
    } else if (dir === "W" && roverX > 0) {
        roverX -= 1;
    } else {
        console.log('Rover fuera del grid');
    }
    console.log('moveForward / nueva posición : X ' + roverX + ', Y ' + roverY);
    createHistory();
}
function moveBackward(myRover) {
    console.log("moveBackward was called");
    if (dir === 'N' && roverY > 0) {
        roverY -= 1;
    } else if (dir === 'S' && roverY < 10) {
        roverY += 1;
    } else if (dir === 'E' && roverX > 0) {
        roverX -= 1;
    } else if (dir === 'W' && roverX < 10) {
        roverX += 1;
    } else {
        console.log('Rover fuera del grid');
    }
    console.log('moveBackward / nueva posición : X ' + roverX + ', Y ' + roverY);
    createHistory();
  }
  var command = "ffzzy";

function processCommand(command) {
    for (var i = 0; i < command.length; i++) {
        if (command[i] === "f") {
            moveForward(myRover);
        } else if (command[i] === "b") {
            moveBackward(myRover);
        } else if (command[i] === "l") {
            turnLeft(myRover);
        } else if (command[i] === "r") {
            turnRight(myRover);
        } else {
            console.log('Comando inválido: ' + command[i]);
        }
    }
    console.log(myRover.travelLog);
    console.log(i);
}
function createHistory() {
    myRover.travelLog.push('coordenada X: '+roverX+' / coordenada Y: '+roverY);
}
