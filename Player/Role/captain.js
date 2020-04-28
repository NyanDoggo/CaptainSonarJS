class captain extends role{
    currentCommand;
    availableActions = ["moveRight", "moveLeft", "moveUp", "moveDown"];
    constructor() {
        super();
        this.currentCommand = [];
    }

    moveShipRight(){
        console.log("moveRight");
    }

    moveShipLeft(){
        console.log("moveLeft");
    }

    moveShipUp(){
        console.log("moveUp");
    }

    moveShipDown(){
        console.log("moveDown");
    }


}