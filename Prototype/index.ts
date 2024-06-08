import { animalPrototype } from "./animal-prototype";


const dog = animalPrototype.clone();
dog.type = 'Dog';
dog.makeSound = function() {
  console.log(dog.type+': woof');
}

dog.makeSound();


const cat = animalPrototype.clone();
cat.type = 'Cat';
cat.makeSound = function() {
  console.log( cat.type+': meow');
}

cat.makeSound();