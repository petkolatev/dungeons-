class Vehicle {
    constructor(vType, vModel, vParts, vFuel) {
        this.type = vType;
        this.model = vModel;
        vParts.quality = vParts.engine * vParts.power
        this.parts = vParts
        this.fuel = vFuel;
    }
    drive(distance) {
        this.fuel -= distance
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
