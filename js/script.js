
(function() {

var canvas = document.getElementById("canvas")
var width = canvas.width
var height = canvas.height
var canvasOffset = canvas.getBoundingClientRect()
//returns the position & size of the canvas relative to the viewport
var ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.fillStyle = "blue"
ctx.fillRect(20, 40, 210, 800)
ctx.closePath()
var currentPosition = {
	x:0, y:0
}
//object representing x and y coordinates 

var previousPosition = currentPosition
var clearPreviousPositon = true
//variables to ensure the clearing of pixels is smooth

canvas.onmousemove = function(z){
    currentPosition = {
        x: z.pageX - canvasOffset.left, //returns distance of cursor relative to the very left of the window
        y: z.pageY - canvasOffset.top //returns distance of cursor relative to the very top of the window
    }
}
function drawCursor(){
    
    if (clearPreviousPositon){
        // parameter for clearing the canvas 
        ctx.clearRect(previousPosition.x -5 , previousPosition.y-5 , 10, 10)
       //the 10px width/height will be cleared when moved 
        previousPosition = currentPosition;
    } else {
        ctx.clearRect(0, 0, width, height)
    }
   
    window.requestAnimationFrame(drawCursor);  
    //Instead of setInterval 
}
 setInterval(function() {
       drawCursor()
    }, 1000/50);


})()
