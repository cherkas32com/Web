var Controller = function (View, Model) {
    this.circleView = View;
    this.circleModel = Model;
};

Controller.prototype.init = function () {
  this.circleView.init();
  this.circleModel.init();
};

function func() {
    let forRemove = []
    this.circleModel.changeSize(forRemove)
    this.circleView.renderAll(this.circleModel.objs, forRemove);
    this.circleModel.removeObjs(forRemove)
    var last = this.circleModel.generateCirсle()   
}

var circleController = new Controller(circleView, circleModel);
circleController.init();
setInterval(func, 500)
