const myTimeObject = {
    hh: "20",
    mm: "45",
    ss: "50",

    // If we need to implicit transform to primitive (string / number(timestamp))
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `${this.hh}:${this.mm}:${this.ss}` : (this.hh * 3600 + this.mm * 60 + this.ss) * 1000;
    },

    showTime() {
        console.log(`${this.hh}:${this.mm}:${this.ss}`);
    },
    // For recalculate non-regular values (25h or 62sec or -5min...)
    recalculateTime() {
        let parsedTime = new Date(1970, 0, 1, Number(this.hh), Number(this.mm), Number(this.ss));
        this.hh = parsedTime.getHours().toString();
        if (this.hh.length < 2) { this.hh = `0${this.hh}` };
        this.mm = parsedTime.getMinutes().toString();
        if (this.mm.length < 2) { this.mm = `0${this.mm}` };
        this.ss = parsedTime.getSeconds().toString();
        if (this.ss.length < 2) { this.ss = `0${this.ss}` };
    },
    // Param time parsed to our format before recalculating
    setTime(time) {
        let tmp = String(time).split(":");
        this.hh = +tmp[0]?.toString();
        this.hh = this.hh ? this.hh : "00";
        this.mm = +tmp[1]?.toString();
        this.mm = this.mm ? this.mm : "00";
        this.ss = +tmp[2]?.toString();
        this.ss = this.ss ? this.ss : "00";
        this.recalculateTime();
    },
    addSecond(time) {
        this.setTime(time);
        this.ss++;
        this.recalculateTime();
    },
    subtractSecond(time) {
        this.setTime(time);
        this.ss--;
        this.recalculateTime();
    },
    showCurrentTimeOnPage() {
        let now = new Date();
        document.write(`Current time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    },
};

let userInput;
do {
    if (userInput !== undefined) {
        console.log("Set time and add 1 sec");
        myTimeObject.addSecond(userInput);
        myTimeObject.showTime();
        console.log("Set time and substract 1 sec");
        myTimeObject.subtractSecond(userInput);
        myTimeObject.showTime();
    }
    userInput = prompt("Enter the time if format \"hh:mm:ss\" or press \"Cancel\" to skip this task");
} while (userInput !== null);

myTimeObject.showCurrentTimeOnPage();