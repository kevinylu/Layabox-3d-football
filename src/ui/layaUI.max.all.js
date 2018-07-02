var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GamePauseSceneUI=(function(_super){
		function GamePauseSceneUI(){
			
		    this.resumeBtn=null;
		    this.exitBtn=null;

			GamePauseSceneUI.__super.call(this);
		}

		CLASS$(GamePauseSceneUI,'ui.GamePauseSceneUI',_super);
		var __proto__=GamePauseSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePauseSceneUI.uiView);

		}

		GamePauseSceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Button","props":{"width":0,"var":"resumeBtn","stateNum":1,"skin":"comp/asset-resume-btn.png","scaleY":0.5,"scaleX":0.5,"centerX":-70,"bottom":200}},{"type":"Button","props":{"var":"exitBtn","stateNum":1,"skin":"comp/asset-exit-btn.png","scaleY":0.5,"scaleX":0.5,"centerX":70,"bottom":200}}]};
		return GamePauseSceneUI;
	})(View);
var GamePlaySceneUI=(function(_super){
		function GamePlaySceneUI(){
			
		    this.pauseBtn=null;
		    this.ballImage1=null;
		    this.ballImage2=null;
		    this.ballImage3=null;

			GamePlaySceneUI.__super.call(this);
		}

		CLASS$(GamePlaySceneUI,'ui.GamePlaySceneUI',_super);
		var __proto__=GamePlaySceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePlaySceneUI.uiView);

		}

		GamePlaySceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Button","props":{"var":"pauseBtn","top":20,"stateNum":1,"skin":"comp/asset-pause-btn.png","scaleY":0.5,"scaleX":0.5,"right":20}},{"type":"Image","props":{"var":"ballImage1","top":25,"skin":"comp/asset-football-icon.png","scaleY":0.05,"scaleX":0.05,"centerX":-40}},{"type":"Image","props":{"var":"ballImage2","top":25,"skin":"comp/asset-football-icon.png","scaleY":0.05,"scaleX":0.05,"centerX":0}},{"type":"Image","props":{"var":"ballImage3","top":25,"skin":"comp/asset-football-icon.png","scaleY":0.05,"scaleX":0.05,"centerX":40}}]};
		return GamePlaySceneUI;
	})(View);
var GameStartSceneUI=(function(_super){
		function GameStartSceneUI(){
			
		    this.startBtn=null;

			GameStartSceneUI.__super.call(this);
		}

		CLASS$(GameStartSceneUI,'ui.GameStartSceneUI',_super);
		var __proto__=GameStartSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartSceneUI.uiView);

		}

		GameStartSceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Button","props":{"var":"startBtn","stateNum":1,"skin":"comp/asset-play-btn.png","scaleY":0.5,"scaleX":0.5,"centerX":0,"bottom":200}}]};
		return GameStartSceneUI;
	})(View);