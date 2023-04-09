class Car{
    constructor(model,MPG){
        this.model = model
        this.tank = 0 ;
        this.milespergallon = MPG;
        this.odometer = 0;
    }
    fills(gallons) {
        this.tank += gallons;
        this.odometer = this.tank* this.milespergallon
    }
    drive() {
        return `I ran out of fuel at ${this.odometer} miles!`;
    }

}
let BMW = new Car("BMW" ,100)
BMW.fills(2)
console.log(BMW)
console.log(BMW.drive())

