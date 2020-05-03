class SubmarineSystem{
    constructor() {
        this.circuit = [];
        this.initSubmarineSystem();
        this.isWeaponSystemAvailable = true;
        this.isDetectionSystemAvailable = true;
        this.isSpecialSystemAvailable = true;
    }

    initWestCircuit(){
        this.circuit.push(new SystemSymbol("weaponSystem", true, "yellow", "west", false));
        this.circuit.push(new SystemSymbol("specialSystem", true, "yellow", "west", false));
        this.circuit.push(new SystemSymbol("detectionSystem", true, "yellow", "west", false));
        this.circuit.push(new SystemSymbol("detectionSystem", false, "none", "west", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "west", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "west", false));
    }

    initNorthCircuit(){
        this.circuit.push(new SystemSymbol("weaponSystem", true, "orange", "north", false));
        this.circuit.push(new SystemSymbol("specialSystem", true, "orange", "north", false));
        this.circuit.push(new SystemSymbol("specialSystem", true, "orange", "north", false));
        this.circuit.push(new SystemSymbol("detectionSystem", false, "none", "north", false));
        this.circuit.push(new SystemSymbol("weaponSystem", false, "none", "north", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "north", false));
    }

    initSouthCircuit(){
        this.circuit.push(new SystemSymbol("weaponSystem", true, "black", "south", false));
        this.circuit.push(new SystemSymbol("specialSystem", true, "black", "south", false));
        this.circuit.push(new SystemSymbol("detectionSystem", true, "black", "south", false));
        this.circuit.push(new SystemSymbol("weaponSystem", false, "none", "south", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "south", false));
        this.circuit.push(new SystemSymbol("specialSystem", false, "none", "south", false));
    }

    initEastCircuit(){
        this.circuit.push(new SystemSymbol("detectionSystem", true, "orange", "east", false));
        this.circuit.push(new SystemSymbol("specialSystem", true, "black", "east", false));
        this.circuit.push(new SystemSymbol("weaponSystem", true, "yellow", "east", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "east", false));
        this.circuit.push(new SystemSymbol("detectionSystem", false, "none", "east", false));
        this.circuit.push(new SystemSymbol("radiation", false, "none", "east", false));
    }

    initSubmarineSystem(){
        this.initWestCircuit();
        this.initNorthCircuit();
        this.initSouthCircuit();
        this.initEastCircuit();
    }
}