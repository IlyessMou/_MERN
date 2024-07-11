class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }

  showStats() {
    console.log(`
      Name: ${this.name}
      Strength: ${this.strength}
      Speed: ${this.speed}
      Health: ${this.health}
    `);
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name} drank sake and gained 10 health.`);
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
