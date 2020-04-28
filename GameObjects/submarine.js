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
        driveShip("left");
    }

    driveShipRight(){
        driveShip("right");
    }

    driveShipDown(){
        driveShip("down");
    }

    driveShipUp() {
        driveShip("up")
    }

    isValidMove(currentI, currentJ){
        return !(gameMap[currentI][currentJ] === 1 || currentJ >= gameMap[0].length || currentI >= gameMap.length || currentI < 0 || currentJ < 0);
    }

    driveShip(direction){
        if (direction === "right"){
            let tmp = this.indexJ + 1;
            if (this.isValidMove(this.indexI, tmp)){
                this.indexJ++;
                addRouteToSub()
                console.log(this.route);
            }
        } else if (direction === "left"){
            let tmp = this.indexJ - 1;
            if (this.isValidMove(this.indexI, tmp)){
                this.indexJ--;
                addRouteToSub()
            }
        } else if (direction === "up"){
            let tmp = this.indexI - 1;
            if (this.isValidMove(tmp, this.indexJ)){
                this.indexI--;
                addRouteToSub()
            }
        } else if (direction === "down"){
            let tmp = this.indexI + 1;
            if (this.isValidMove(tmp, this.indexJ)){
                this.indexI++;
                addRouteToSub()
            }
        }
    }



    addToRoute(indexI, indexJ){
        let tmp = {indexI,indexJ};
        this.route.push(tmp);
    }
}