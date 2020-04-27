class team{
    constructor(players) {
        this.players = players;
        this.submarine = new submarine(0,0);
        this.mapView = gameMap;
        this.initMap();
    }

    initMap(){
        this.mapView[this.submarine.indexI][this.submarine.indexJ] = 5;
    }
}