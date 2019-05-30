		var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
        ctx.font = "20px Bold"
        ctx.fillStyle = "Blue";
        var text = ctx.measureText("Orifice");
        ctx.fillText("Orifice", 100,30);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(100, 33, text.width,0.3);
        canvas.style.left = "100px";
        canvas.style.position = "absolute";



	function draw(startX, startY, newX, newY) {
		var path = new Path()
	path.strokeColor =  'black';
	var start = new Point(startX, startY);
	path.moveTo(start);
	path.lineTo(newX, newY);
	}
	draw(200, 300, 400, 300);
	draw(400, 300, 400, 200);
	draw(406, 200, 406, 300);
	draw(406, 300, 500, 300);
	draw(500, 300, 500, 200);
	draw(506, 200, 506, 300);
	draw(506, 300, 800, 300);
	draw(200, 425, 800, 425);
	var path = new Path.Arc({
    from: [200, 425],
    through: [180, 360],
    to: [200, 300],
    strokeColor: 'black'
});
var text = new PointText({
    point: [100, 100, 50],
    content: 'Orifice',
    fillColor: 'Blue',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 25
});
	
	var path = new Path.Arc({
	from: [800, 425],
	through: [780,360],
	to: [800, 300],
	strokeColor: 'black'
});