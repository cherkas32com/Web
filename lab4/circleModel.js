
var Model = function () {
    this.objs = [];
};   


Model.prototype.init = function(){
};

Model.prototype.generateCirсle = function () {
    let _obj = {
        x: getRandomFloat(0, 1500),
        y: getRandomFloat(0, 700),
        r: getRandomFloat(20, 80),
        R: 0,
        color: getRandomColor()
    }
    _obj.R = _obj.r
    this.objs.push(_obj)
    return _obj
}

Model.prototype.changeSize = function(forRemove) {
    for(var i = 0; i < this.objs.length; i++) {
        this.objs[i].r += 5;
        if (this.objs[i].r > this.objs[i].R * 2) {
            forRemove.push(i)
        }
    }
}

Model.prototype.removeObjs = function(forRemove) {
    var removed = []
    for (var i = 0; i < forRemove.length; i++) {
        removed.push(this.objs[forRemove[i]])   
    }
    for (var i = 0; i < removed.length; i++) {
        for (var j = 0; j < this.objs.length; j++) {
            if (removed[i] === this.objs[j]) {
                this.objs.splice(j, 1)
                break
            }
        }
    }  
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

var circleModel = new Model()



