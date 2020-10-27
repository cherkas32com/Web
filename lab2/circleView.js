
var View = function () {
  this.circle = document.querySelector(".circle");
};

View.prototype.init = function () {
};

View.prototype.renderOne = function (last) {
    let div = document.createElement("div")
    div.setAttribute("class", "circle")
    div.style.position = "absolute"
    div.style.width = +last.r + +last.r + "px"
    div.style.height = +last.r + +last.r + "px"
    div.style.backgroundColor = last.color
    div.style.left = +last.x + "px"
    div.style.top = +last.y + "px"
    div.style.borderRadius = "50%"
    document.getElementsByClassName("circles")[0].appendChild(div)
}

View.prototype.renderAll = function(objs, forRemove) {
    for (var i = 0; i < objs.length; i++) {
        var div = document.getElementsByClassName("circle")[i]
        div.style.width = +objs[i].r + +objs[i].r + "px"
        div.style.height = +objs[i].r + +objs[i].r + "px"  
    }
    for (var j = 0; j < forRemove.length; j++) {
         var child = document.getElementsByClassName("circle")[j]
         document.getElementsByClassName("circles")[0].removeChild(child)
    }
}

var circleView = new View()
