class firstMate{
    constructor(mediator) {
        this.mediator = mediator;
    }

    markMine(){
        this.mediator.receiveNotification("firstMate", "markMine");
    }

    markTorpedo(){
        this.mediator.receiveNotification("firstMate", "markTorpedo");
    }

    markDrone(){
        this.mediator.receiveNotification("firstMate", "markDrone");
    }

    markSonar(){
        this.mediator.receiveNotification("firstMate", "markSonar");
    }

    markSilence(){
        this.mediator.receiveNotification("firstMate", "markSilence");
    }
}