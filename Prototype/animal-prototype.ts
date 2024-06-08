export const animalPrototype = {
  type:'unknown',
  makeSound: function() {
    console.log('unknown animal sound');
  },
  clone: function() {
   return Object.create(this);
  }
}
