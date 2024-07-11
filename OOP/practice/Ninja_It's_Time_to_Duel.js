class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}
//turn1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
redBeltNinja.resilience += hardAlgorithm.magnitude;
//turn2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
redBeltNinja.resilience += unhandledPromiseRejection.magnitude;

//turn3
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
redBeltNinja.power += pairProgramming.magnitude;
blackBeltNinja.attack(redBeltNinja);

console.log("Red Belt Ninja:");
console.log("Power:", redBeltNinja.power);
console.log("Resilience:", redBeltNinja.resilience);

console.log("\nBlack Belt Ninja:");
console.log("Power:", blackBeltNinja.power);
console.log("Resilience:", blackBeltNinja.resilience);
