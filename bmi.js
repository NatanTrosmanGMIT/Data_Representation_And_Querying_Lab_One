class BMI {

    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

let myBMI = new BMI(1.93, 111);
let calc = myBMI.calculateBMI();
console.log(calc);