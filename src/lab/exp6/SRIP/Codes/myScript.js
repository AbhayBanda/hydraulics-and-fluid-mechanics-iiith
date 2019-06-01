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
	draw(185, 300, 400, 300);
	draw(400, 300, 400, 200);
	draw(406, 200, 406, 300);
	draw(406, 300, 500, 300);
	draw(500, 300, 500, 200);
	draw(506, 200, 506, 300);
	draw(506, 300, 800, 300);
	draw(185, 425, 800, 425);
	function draw1(startX, startY, newX, newY) {
	var path = new Path()
	path.strokeColor =  'black';
	Path.strokeWidth = 2
	var start = new Point(startX, startY);
	path.moveTo(start);
	path.lineTo(newX, newY);
	}


/*	var path = new Path.Arc({
    from: [200, 425],
    through: [180, 360],
    to: [200, 300],
    strokeColor: 'black'
});*/
var text = new PointText({
    point: [100, 100, 50],
    content: 'Orifice',
    fillColor: 'Blue',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 25
});
	
	/*var path = new Path.Arc({
	from: [800, 425],
	through: [780,360],
	to: [800, 300],
	strokeColor: 'black',
});*/

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
	for(var i = 470; i<790 ; i = i + 20)
	{
		for(var j = 300; j<422; j = j + 20 )
		{


  						var path = new Path.Arc({
	from: [i, j],
	through: [i + 4,j + 4],
	to: [i, j + 8],
	strokeColor: 'white',
});
			

		}
	}

draw(450, 300, 450, 355);
draw(460, 300, 460, 340);
draw(450, 355, 460, 340);
var myPath = new Path({
	segments: [[450, 300], [450,355], [460, 340], [460,300 ]],
	selected: true
});

myPath.fillColor = '#B6B6C7';


draw(450, 425, 450, 380);
draw(460, 425, 460, 385);
draw(450, 380, 460, 385);
var myPath = new Path({
	segments: [[450, 425], [450,380], [460, 385], [460, 425],],
	selected: true
});

myPath.fillColor = '#B6B6C7';



	for(var i = 470; i<790 ; i = i + 20)
	{
		for(var j = 300; j<422; j = j + 20 )
		{


  						var path = new Path.Arc({
	from: [i, j],
	through: [i + 4,j + 4],
	to: [i, j + 8],
	strokeColor: 'white',
});
			

		}
	}

function pointText(X, Y, fill_color, string){
var text = new PointText(new Point(X, Y));
//text.justification = 'center';
text.fillColor = fill_color;
text.content = string;
}
pointText(240, 200, 'blue', "Upstream Pressure Tap");
pointText(550, 200, 'blue', "Downstream Pressure Tap");
pointText(100, 350, 'blue', "Flow direction");