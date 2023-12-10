const myCar = {
    manufacturer: "VW",
    model: "Golf",
    year: 2014,
    averageSpeed: 110,

    displayInfo() {
        alert(`Manufacturer: "${this.manufacturer}"\nModel: "${this.model}"\nYear: "${this.year}"\nAverage speed: "${this.averageSpeed}"`);
    },
    calculateRoadTime(distance) {
        if (!checkIsNumber(distance)){
            alert("Invalid value!");
            return;
        }
        let timeInMin = Number(distance) * 60 / this.averageSpeed;
        let time = new Date(timeInMin * 60 * 1000);
        let numberOf4HoursSegments = Math.round(time.getUTCHours() / 4);
        for (let i = 0; i < numberOf4HoursSegments; i++) {
            time.setHours(time.getHours() + 1);
        }
        return time;
    }
}
myCar.displayInfo();
let distance = 500;
let distanceTime = myCar.calculateRoadTime(distance);
console.log(`To cover a distance of ${distance} km, you need to spend about ${distanceTime.getUTCHours()} hours and ${distanceTime.getUTCMinutes()} minutes`);

function checkIsNumber(number) {
    let result = false;
    if (number === null) {
        console.log("Your value is null. Enter again");
    } else if (number === "") {
        console.log("Your value is empty string. Enter again");
    } else if (isNaN(number)) {
        console.log("Your value is not a number. Enter again");
    } else {
        result = true;
    }
    return result;
}