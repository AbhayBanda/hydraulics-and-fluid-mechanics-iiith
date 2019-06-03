
function Canvas(color, x_initial, y_initial, X, Y, left, top) {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = color;
ctx.fillRect(x_initial, y_initial, X, Y);
canvas.style.position = "absolute";
canvas.style.left = left;
canvas.style.top = right;
}


Canvas("#0000ff", 0, 0, 700, 50, "300px","30px");
