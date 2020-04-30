class submarine{

    constructor(indexI, indexJ) {
        this.indexI = indexI;
        this.indexJ = indexJ;
        this.isDive = true;
        this.route = [];
        this.mineGauge = 0;
        this.torpedoGauge = 0;
        this.sonarGauge = 0;
        this.droneGauge = 0;
        this.silenceGauge = 0;
        this.hullHP = 4;
        this.firstMateOKSignal = true;
        this.engineerOKSignal = true;
        this.captainOKSignal = false;
        this.submarineSystem = new SubmarineSystem();
    }

    increaseMineGauge(){
        this.mineGauge++;
        this.firstMateOKSignal = true;
    }

    increaseTorpedoGauge(){
        this.torpedoGauge++;
        this.firstMateOKSignal = true;
    }

    increaseSonarGauge(){
        this.sonarGauge++;
        this.firstMateOKSignal = true;
    }

    increaseDroneGauge(){
        this.droneGauge++;
        this.firstMateOKSignal = true;
    }

    increaseSilenceGauge(){
        this.silenceGauge++
        this.firstMateOKSignal = true;
    }

    dive(){
        this.isDive = !this.isDive;
    }

    driveShipLeft(){
        this.driveShip("left");
    }

    driveShipRight(){
        this.driveShip("right");
    }

    driveShipDown(){
        this.driveShip("down");
    }

    driveShipUp() {
        this.driveShip("up")
    }

    isValidMove(currentI, currentJ){
        return !(gameMap[currentI][currentJ] === 1 || currentJ >= gameMap[0].length || currentI >= gameMap.length || currentI < 0 || currentJ < 0);
    }

    driveShip(direction){
        if (direction === "right"){
            let tmp = this.indexJ + 1;
            if (this.isValidMove(this.indexI, tmp)){
                this.indexJ++;
                // console.log(this.route);
            }
        } else if (direction === "left"){
            let tmp = this.indexJ - 1;
            if (this.isValidMove(this.indexI, tmp)){
                this.indexJ--;
            }
        } else if (direction === "up"){
            let tmp = this.indexI - 1;
            if (this.isValidMove(tmp, this.indexJ)){
                this.indexI--;
            }
        } else if (direction === "down"){
            let tmp = this.indexI + 1;
            if (this.isValidMove(tmp, this.indexJ)){
                this.indexI++;
            }
        }
        this.captainOKSignal = true;
    }

    addToRoute(indexI, indexJ){
        let tmp = {indexI,indexJ};
        this.route.push(tmp);
    }
}