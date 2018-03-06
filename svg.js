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
    //c.setAttribute("clicked", "0");
    svg.appendChild(c);
};

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", svgCallback);
