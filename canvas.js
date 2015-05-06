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
