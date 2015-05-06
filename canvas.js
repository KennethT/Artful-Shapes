function drawBorder(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.strokeRect(0,0, size.x, size.y);
}

drawBorder();

function drawRedRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height};
  context.fillStyle='red';
  context.fillRect(size.x/2,size.y/2,size.x,size.y);

}



function drawBlueRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };

  context.fillStyle='blue';
  context.fillRect(0,0,size.x/2,size.y/2);

}

function redButton(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };
  context.globalAlpha=Math.random();

  context.fillStyle='red';
  if(Math.floor(Math.random() < 0.5)){
    context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
    Math.floor(Math.random()*500), Math.floor(Math.random()*500));
  } else {
    context.beginPath();
    context.arc((Math.random()*500), (Math.random()*500), 60, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
  }

}

function greenButton(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };
  context.globalAlpha=Math.random();

  context.fillStyle='green';
  if(Math.floor(Math.random() < 0.5)){
    context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
    Math.floor(Math.random()*500), Math.floor(Math.random()*500));
  } else {
    context.beginPath();
    context.arc((Math.random()*500), (Math.random()*500), 60, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
  }


}

function blueButton(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };
  context.globalAlpha=Math.random();

  context.fillStyle='blue';
  if(Math.floor(Math.random() < 0.5)){
    context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
    Math.floor(Math.random()*500), Math.floor(Math.random()*500));
  } else {
    context.beginPath();
    context.arc((Math.random()*500), (Math.random()*500), 60, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
  }


}

function orangeButton(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };
  context.globalAlpha=Math.random();

  context.fillStyle='orange';
  if(Math.floor(Math.random() < 0.5)){
    context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
    Math.floor(Math.random()*500), Math.floor(Math.random()*500));
  } else {
    context.beginPath();
    context.arc((Math.random()*500), (Math.random()*500), 60, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
  }

}

function clearCanvas(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = {x: canvas.width, y: canvas.height };

  context.clearRect(0,0,canvas.width, canvas.height);
  drawBorder();
}
