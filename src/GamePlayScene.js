CLASS$(function () {
    this.__super.call(this);
    Laya.stage.on(Laya.Event.MOUSE_DOWN,this,onMouseDown);
},'GamePlayScene',ui.GamePlaySceneUI);

var gameReady = false;

function onMouseDown()
{
    if (!gameReady || settings.tweening){
        return;
    }
    console.log("onMouseDown");
    shootBall();
}

function shootBall(){
    var relativeTween = new TWEEN.Tween(ballPosition)
                        .to({x:4, y:4.16, z: 15 }, 500)
                        .onUpdate(function(object) {
                            settings.tweening = true;
	                    })
                        .onComplete(function(){
                            settings.tweening = false;
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
                        });
    relativeTween.start();
}

GamePlayScene.prototype.restart = function() {
    settings.paused = false;
    console.log("restart");
    setCamaraPosition();
}

GamePlayScene.prototype.pause = function() {
    console.log("pause");
    showGamePause();
    settings.paused = true;
    gameReady = false;
}

GamePlayScene.prototype.tweenUpdate = function() {
    //TODO
    if (!gameReady){
        camera.transform.position = cameraPosition;
        camera.transform.lookAt(ballPosition, new Laya.Vector3(0, 180, 0), false);
    }
    else{
        ball.transform.position = ballPosition;
    }
}

GamePlayScene.prototype.cannonUpdate = function() {
    //TODO
}