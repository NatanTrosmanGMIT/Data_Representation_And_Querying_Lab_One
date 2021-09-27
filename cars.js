// Create Vehicle class
class Vehicle {
    // Create Vehicle constructor
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Display info method
    Information() {
        console.log(`Make : ${this.make} `);
        console.log(`Model : ${this.model}`);
        console.log(`Year : ${this.year}`);

    }
}
// Create Cars class that extends Vehicle
class Cars extends Vehicle{
    constructor(make, model, year,doors) {
        super(make, model, year);
        this.doors = doors;
    }
    // Display more info method
    moreInformation() {
        super.Information();
        console.log(`Doors : ${this.doors}`);
    }
}

// Instansiate and display Vehicles

//let vehicle1 = new Vehicle('Honda','CR-V', 1996);
let vehicle2 = new Cars('Honda','CR-V', 1996, 5);
//let info = vehicle1.Information();
let moreInfo = vehicle2.moreInformation();
//console.log(info);
//console.log(moreInfo);