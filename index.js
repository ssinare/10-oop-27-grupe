  
const Dog = require('./js/Dog');
const Cat = require('./js/Cat');

const rexas = new Dog('Rex', 'brown');
const brisius = new Dog('Brisius', 'grey');
const rainis = new Cat('Rainis', 'rainas');

console.log(brisius.name);
console.log(rexas.name);
console.log(rainis.name);


rexas.voice();
brisius.voice();
rainis.voice();
rexas.introduce();
brisius.introduce();
rainis.introduce();