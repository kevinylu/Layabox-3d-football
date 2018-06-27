CLASS$(function () {
    this.__super.call(this);
    Laya.stage.on(Laya.Event.MOUSE_DOWN,this,onMouseDown);
    Laya.stage.on(Laya.Event.MOUSE_UP,this,onMouseUp);
},'GamePlayScene',ui.GamePlaySceneUI);

var gameReady = false;

var touchBeginPoint = new Laya.Vector2();
var touchEndPoint = new Laya.Vector2();
function onMouseDown() {
    touchBeginPoint.elements[0] = Laya.stage.mouseX;
    touchBeginPoint.elements[1] = Laya.stage.mouseY;
}

function onMouseUp() {
    if (!gameReady || settings.tweening || Laya.stage.mouseY < this.pauseBtn.y + this.pauseBtn.height){
        return;
    }
    touchEndPoint.elements[0] = Laya.stage.mouseX;
    touchEndPoint.elements[1] = Laya.stage.mouseY;
    shootBall();
}

function shootBall() {
    var side = 4;
    if (touchEndPoint.elements[0] == touchBeginPoint.elements[0]) {
        side = 0;
    } else if (touchEndPoint.elements[0] > touchBeginPoint.elements[0]) {
        side = -4;
    }
    var relativeTween = new TWEEN.Tween(ballPosition)
                        .to({x:side, y:4.16, z: 15 }, 500)
                        .onUpdate(function(object) {
                            settings.tweening = true;
	                    })
                        .onComplete(function(){
                            settings.tweening = false;
                            ballSphereBody.position = new CANNON.Vec3(ballPosition.x, ballPosition.z, ballPosition.y);
                        });
    relativeTween.start();
}

function setCamaraPosition() {
    var relativeTween = new TWEEN.Tween(cameraPosition)
                        .to({x:0, y:5.5, z: -12 }, 2000)
                        .onUpdate(function(object) {
                            settings.tweening = true;
	                    })
                        .onComplete(function(){
                            settings.tweening = false;
                            gameReady = true;
                            gameplay_scene.pauseBtn.visible = true;
                        });
    relativeTween.start();
}

GamePlayScene.prototype.restart = function() {
    settings.paused = false;
    //console.log("restart");
    setCamaraPosition();
}

GamePlayScene.prototype.pause = function() {
    //console.log("pause");
    showGamePause();
    settings.paused = true;
    gameReady = false;
}

GamePlayScene.prototype.tweenUpdate = function() {
    if (!gameReady){
        camera.transform.position = cameraPosition;
        camera.transform.lookAt(ballPosition, new Laya.Vector3(0, 180, 0), false);
    }
    else{
        ball.transform.position = ballPosition;
    }
}

GamePlayScene.prototype.cannonUpdate = function() {
    ballPosition = new Laya.Vector3(ballSphereBody.position.x, ballSphereBody.position.z, ballSphereBody.position.y);
}