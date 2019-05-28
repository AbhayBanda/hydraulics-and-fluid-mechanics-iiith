	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
        ctx.font = "20px Bold"
        ctx.fillStyle = "Blue";
        var text = ctx.measureText("Orifice");
        ctx.fillText("Orifice", 100,30);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(100, 33, text.width,0.3);
        canvas.style.left = "250px";
        canvas.style.position = "absolute";