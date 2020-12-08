var View = function () {

};

View.prototype.init = function () {
    this.canvas = document.createElement("canvas")
    this.canvas.setAttribute("id", "canvas")
    this.canvas.setAttribute("width", "1500")
    this.canvas.setAttribute("height", "700")
    document.getElementsByClassName("circles")[0].append(this.canvas)
    this.context = this.canvas.getContext("2d")
};

View.prototype.setColor = function (color) {
    this.context.fillStyle = color
}

View.prototype.renderAll = function (objs, forRemove) {
    this.context.clearRect(0, 0, 1500, 700)
    var fIndex = 0;
    for (var i = 0; i < objs.length; i++) {
        if (i === forRemove[fIndex]) {
            fIndex++;
        } else {
            this.context.beginPath()
            this.context.arc(objs[i].x, objs[i].y, objs[i].r, 0, Math.PI * 2, true)
            this.setColor(objs[i].color)
            this.context.fill()
        }
    }

  
}

var circleView = new View()
