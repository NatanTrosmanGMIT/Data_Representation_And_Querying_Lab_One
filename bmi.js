// Create BIM class
class BMI {
    // Create constructor for BMI
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    // Calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

// Instansiate and display BMI
let myBMI = new BMI(1.93, 111);
let calc = myBMI.calculateBMI();
console.log(calc);