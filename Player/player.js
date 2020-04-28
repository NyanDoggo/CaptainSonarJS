class player{
    currentCommand;
    constructor() {

    }

    setRole(roleName){
        if (roleName === "Captain"){
            this.role = new captain();
        } else if (roleName === "FirstMate"){
            this.role = new firstMate();
        }
    }
}