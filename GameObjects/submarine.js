class submarine{
    constructor(indexI, indexJ) {
        this.indexI = indexI;
        this.indexJ = indexJ;
        this.isDive = true;
        this.route = [];
        this.hullHP = 4;
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