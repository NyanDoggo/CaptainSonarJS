class captain{
    constructor(mediator) {
        this.mediator = mediator
    }

    setMediator(mediator){
        this.mediator = mediator;
    }
    // chooseStartingLocation(indexI, indexJ){
    //     this.submarine.indexI = indexI;
    //     this.submarine.indexJ = indexJ;
    // }

    moveShipRight(){
        this.mediator.receiveNotification("captain", "moveRight");
    }

    moveShipLeft(){
        this.mediator.receiveNotification("captain", "moveLeft");
    }

    moveShipUp(){
        this.mediator.receiveNotification("captain", "moveUp");
    }

    moveShipDown(){
        this.mediator.receiveNotification("captain", "moveDown");
    }


}