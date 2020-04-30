class SystemSymbol{
    constructor(system, isCircuit, circuitColor, direction, isCrossedOut){
        /*
      symbol: {weaponSystem, isCircuit, circuitColor:{yellow, orange, black}, direction, isCrossedOut}
   */
        this.system = system;
        this.isCircuit = isCircuit;
        this.circuitColor = circuitColor;
        this.direction = direction;
        this.isCrossedOut = isCrossedOut;
    }
}