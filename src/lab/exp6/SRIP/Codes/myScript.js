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
	path.strokeColor =  'grey';
	Path.strokeWidth = 2
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
	function draw1(startX, startY, newX, newY) {
	var path = new Path()
	path.strokeColor =  'black';
	Path.strokeWidth = 2
	var start = new Point(startX, startY);
	path.moveTo(start);
	path.lineTo(newX, newY);
	}


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
	strokeColor: 'black',
});

	var path = new Path()
	path.strokeColor =  'red';
	var start = new Point(100, 103);
	path.moveTo(start);
	path.lineTo(180, 103);
var myPath = new Path({
	segments: [[200, 303], [780,303], [780, 422], [200, 422]],
	selected: true
});

myPath.fillColor = '#4679D5';


function whiteLines(i, j)
{
	var newpath = new Path()
	newpath.strokeColor =  'white';
	var start = new Point(i, j);
	newpath.moveTo(start);
	newpath.lineTo(i + 4, j);
}


	for(var i = 200; i<450; i = i + 10)
	{
		for(var j = 300; j<422; j = j + 10 )
		{
  //do stuff

  					whiteLines(i, j);
			

		}
	}



draw(450, 300, 450, 340);


