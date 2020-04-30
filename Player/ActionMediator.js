class ActionMediator{

    constructor(submarine) {
        this.submarine = submarine;
    }


    checkMovementForCaptain(){
        if (this.submarine.firstMateOKSignal && this.submarine.engineerOKSignal){
            return true
        }
    }

    checkMovementForFirstMate(){
        if (this.submarine.captainOKSignal === true && this.submarine.firstMateOKSignal === false){
            return true;
        }
    }

    resolveEngineerAction(action){

    }

    resolveFirstMateAction(action){
        let moveAllowed = this.checkMovementForFirstMate();
        if (action === "markMine" && moveAllowed && this.submarine.mineGauge < 3){
            this.submarine.increaseMineGauge();
        } else if (action === "markTorpedo" && moveAllowed && this.submarine.torpedoGauge < 3){
            this.submarine.increaseTorpedoGauge();
        } else if (action === "markDrone" && moveAllowed && this.submarine.droneGauge < 4){
            this.submarine.increaseDroneGauge();
        } else if (action === "markSonar" && moveAllowed && this.submarine.sonarGauge < 3){
            this.submarine.increaseSonarGauge();
        } else if (action === "markSilence" && moveAllowed && this.submarine.silenceGauge < 6){
            this.submarine.increaseSilenceGauge();
        }
    }

    resolveCaptainAction(action){
        let moveAllowed = this.checkMovementForCaptain();
        if (action === "moveLeft" && moveAllowed === true){
            //resolve
            this.submarine.driveShipLeft();
            this.submarine.engineerOKSignal = false;
            this.submarine.firstMateOKSignal = false;
        } else if (action === "moveRight"){
            this.submarine.driveShipRight();
            this.submarine.engineerOKSignal = false;
            this.submarine.firstMateOKSignal = false;
        } else if (action === "moveUp"){
            this.submarine.driveShipUp();
            this.submarine.engineerOKSignal = false;
            this.submarine.firstMateOKSignal = false;
        } else if (action === "moveDown"){
            this.submarine.driveShipDown();
            this.submarine.engineerOKSignal = false;
            this.submarine.firstMateOKSignal = false;
        } else if (action === "dropMine"){

        } else if (action === "launchTorpedo"){

        } else if (action === "sendDrone"){

        } else if (action === "activateSonar"){

        } else if (action === "goSilent"){

        } else if (action === "surface"){

        }
    }

    receiveNotification(role, action){
        if (role === "captain"){
            this.resolveCaptainAction(action);
        } else if (role === "firstMate") {
            this.resolveFirstMateAction(action);
        } else if (role === "engineer"){
            this.resolveEngineerAction(action);
        }
    }
}