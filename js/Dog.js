class Dog {
  constructor(name, furColor){
    console.log(name, furColor);
    this.name = name;
    this.furColor = furColor;
    this.legsCount = 4;
    this.tailLength = 0.05;
    this.childrenCount = [];
    this.sound = "au au";
    }

  voice(){
    console.log('Suo loja');
    console.log(`${this.name}: ${this.sound}!`);

  }

  introduce(){
     // Hi, I am Vardenis, my fur is color and I speak like sound
     console.log(`Hi, I am ${this.name}, my fur is ${this.furColor} and I speak like ${this.sound}!`);
    }
}
module.exports = Dog;