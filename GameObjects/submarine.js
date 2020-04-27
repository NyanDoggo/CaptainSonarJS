class submarine{
    constructor(indexI, indexJ) {
        this.indexI = indexI;
        this.indexJ = indexJ;
        this.isDive = true;
        this.route = [];
    }

    dive(){
        this.isDive = !this.isDive;
    }

    addToRoute(indexI, indexJ){
        let tmp = {indexI,indexJ};
        this.route.push(tmp);
    }
}