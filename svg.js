var clear = document.getElementById("clear");
var svg = document.getElementById("svg");

var clearCallback = function(e){
    svg.innerHTML = "";
};

var svgCallback = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "red");
    c.setAttribute("clicked", "0");
    c.addEventListener("click", circleCallback);
    svg.appendChild(c);
};

var circleCallback = function(e){
    var clickedNum = e.target.getAttribute("clicked");
    if (clickedNum == "0"){
	e.target.setAttribute("fill", "green");
	e.target.setAttribute("clicked", "1");
    }
    else if (clickedNum == "1"){
	e.target.remove();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var x = Math.random() * svg.getAttribute("width");
	var y = Math.random() * svg.getAttribute("height");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", "10");
	c.setAttribute("fill", "red");
	c.setAttribute("clicked", "0");
	c.addEventListener("click", circleCallback);
	svg.appendChild(c);
    }
    e.stopPropagation();
};

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", svgCallback);
