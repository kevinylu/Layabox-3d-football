CLASS$(function () {
    this.__super.call(this);
},'GamePlayScene',ui.GamePlaySceneUI);

GamePlayScene.prototype.restart = function() {
    console.log("restart");
    settings.paused = false;

    var relativeTween = new TWEEN.Tween(cameraPosition)
                        .to({x:0, y:5.5, z: -12 }, 3000)
                        .onUpdate(function(object) {
                            settings.tweening = true;
	                    })
                        .onComplete(function(){
                            settings.tweening = false;
                        });
    relativeTween.start();
    settings.paused = false;
}

GamePlayScene.prototype.pause = function() {
    console.log("pause");
    showGamePause();
    settings.paused = true;
}

GamePlayScene.prototype.tweenUpdate = function() {
    //TODO
    camera.transform.position = cameraPosition;
    camera.transform.lookAt(ballPosition, new Laya.Vector3(0, 180, 0), false);
}

GamePlayScene.prototype.cannonUpdate = function() {
    //TODO
}