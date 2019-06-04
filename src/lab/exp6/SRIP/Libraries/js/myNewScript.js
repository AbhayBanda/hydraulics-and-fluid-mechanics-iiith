			var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
		canvas.style.left = "400px";
		canvas.style.top = "200px"
        canvas.style.position = "absolute";


	function draw(startX, startY, newX, newY) {
	var path = new Path()
	path.strokeColor =  'grey';
	Path.strokeWidth = 2
	var start = new Point(startX, startY);
	path.moveTo(start);
	path.lineTo(newX, newY);
	}


	draw(100, 125, 225, 200);
	draw(225, 200, 345, 125 );
	draw(345, 125, 225, 50);
	draw(225, 50, 100, 125);
	var myPath = new Path({
	segments: [[100, 125], [225,200], [345, 125], [225, 50], [100, 125]],
	selected: true
});

myPath.fillColor = '#666666';

draw(225, 85, 123, 145);
draw(225, 85, 316, 150);

	var myPath = new Path({
	segments: [[225, 85], [123,145], [225, 225], [316, 150]],
	selected: true
});

myPath.fillColor = '#33B2B2';

draw(100, 125, 125, 400);
//draw(345, 125, 345, 450);
draw(125, 400,140, 420);
draw(140, 420, 135, 280);
draw(225, 200, 225, 470);
draw(225, 470, 205, 456);
draw(205, 456, 205, 325);
draw(135, 280, 205, 325);


	var myPath = new Path({
	segments: [[100, 125],[225, 200],[225, 470], [205, 456], [205, 325], [135, 280], [140, 420], [125, 400], [100,125]],
	selected: true
});

myPath.fillColor = '#4C4C4C';