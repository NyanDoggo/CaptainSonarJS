class player{
    mediator;
    role;
    constructor() {

    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    setRole(roleName){
        if (roleName === "Captain"){
            this.role = new captain(this.mediator);
        } else if (roleName === "FirstMate"){
            this.role = new firstMate(this.mediator);
        }
    }
}