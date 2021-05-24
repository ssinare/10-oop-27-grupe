class Cat {
    constructor(name, furColor){
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.tailLength = 0.05;
        this.childrenCount = [];
        this.sound = "miau miau";
    }  
    voice(){
        console.log('Kate miaukia');
        console.log(`${this.name}: ${this.sound}!`);
    } 


    introduce(){
        // Hi, I am Vardenis, my fur is color and I speak like sound
        console.log(`Hi, I am ${this.name}, my fur is ${this.furColor} and I speak like ${this.sound}!`);
       }
  }
  



  module.exports = Cat;