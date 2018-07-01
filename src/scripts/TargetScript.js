var TargetScript = (function (_super) {
    function TargetScript() {
        TargetScript.super(this);
    }

    Laya.class(TargetScript, "TargetScript", _super);
   
    TargetScript.prototype._load = function (owner) {
        this.football = this.owner;
    }

    TargetScript.prototype._update = function (state) {
    }

    TargetScript.prototype.onTriggerEnter = function (other) {
        console.log("TargetScript.prototype.onTriggerEnter ");
    }
    
    TargetScript.prototype.onTriggerStay = function (other) {
        console.log("TargetScript.prototype.onTriggerStay ");
    }
    
    TargetScript.prototype.onTriggerExit = function (other) {
        console.log("TargetScript.prototype.onTriggerStay ");
    }
    
    return TargetScript;
})(Laya.Script);