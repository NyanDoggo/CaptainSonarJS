class ActionMediator{

    constructor() {
        this.submarine = new submarine();
    }


    checkMovement(){
        if (this.submarine.firstMateOKSignal && this.submarine.engineerOKSignal){
            return true
        }
    }

    resolveFirstMateAction(action){

    }

    resolveCaptainAction(action){
        let moveAllowed = this.checkMovement();
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
        } else {
            return false;
        }
    }
}