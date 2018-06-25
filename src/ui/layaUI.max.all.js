var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GamePauseSceneUI=(function(_super){
		function GamePauseSceneUI(){
			
		    this.restartBtn=null;
		    this.exitBtn=null;

			GamePauseSceneUI.__super.call(this);
		}

		CLASS$(GamePauseSceneUI,'ui.GamePauseSceneUI',_super);
		var __proto__=GamePauseSceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePauseSceneUI.uiView);

		}

		GamePauseSceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Label","props":{"y":162,"x":151,"text":"Pause"}},{"type":"Button","props":{"y":332,"x":88,"var":"restartBtn","skin":"comp/button.png","label":"RESTART"}},{"type":"Button","props":{"y":333,"x":205,"var":"exitBtn","skin":"comp/button.png","label":"EXIT"}}]};
		return GamePauseSceneUI;
	})(View);
var GamePlaySceneUI=(function(_super){
		function GamePlaySceneUI(){
			
		    this.pauseBtn=null;

			GamePlaySceneUI.__super.call(this);
		}

		CLASS$(GamePlaySceneUI,'ui.GamePlaySceneUI',_super);
		var __proto__=GamePlaySceneUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePlaySceneUI.uiView);

		}

		GamePlaySceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Button","props":{"y":22,"x":268,"var":"pauseBtn","stateNum":3,"skin":"comp/button.png","label":"PAUSE"}}]};
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

		GameStartSceneUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Button","props":{"y":513,"x":147,"var":"startBtn","skin":"comp/button.png","label":"START"}}]};
		return GameStartSceneUI;
	})(View);