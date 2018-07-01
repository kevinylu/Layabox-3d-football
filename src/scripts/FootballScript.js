var FootballScript = (function (_super) {
    function FootballScript() {
        FootballScript.super(this);
    }

    Laya.class(FootballScript, "FootballScript", _super);
   
    FootballScript.prototype._load = function (owner) {
        this.football = this.owner;
    }

    FootballScript.prototype._update = function (state) {
        //console.log("TargetScript.prototype._update ");
    }

    FootballScript.prototype.onTriggerEnter = function (other) {
        console.log("FootballScript.prototype.onTriggerEnter ");
    }
    
    FootballScript.prototype.onTriggerStay = function (other) {
        console.log("FootballScript.prototype.onTriggerStay ");
    }
    
    FootballScript.prototype.onTriggerExit = function (other) {
        console.log("FootballScript.prototype.onTriggerStay ");
    }
    
    return FootballScript;
})(Laya.Script);