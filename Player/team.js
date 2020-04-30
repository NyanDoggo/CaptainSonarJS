class team{
    constructor(captain, firstmate) {
        // this.players = players;
        this.teamMediator = new ActionMediator(this.submarine);
        this.captain = captain
        this.submarine = new submarine(0,0);
        this.mapView = gameMap;
        this.updateSubmarineLocation();
        // this.players.setMediator(this.teamMediator);
    }



    updateSubmarineLocation(){
        this.mapView[this.submarine.indexI][this.submarine.indexJ] = 5;
    }
}