const CarFactory = require('./CarFactory');

const audi = CarFactory.createObject('Audi');
const bmw = CarFactory.createObject('Bmw');
const merceder = CarFactory.createObject('Merceder');


audi.showInfo();
bmw.showInfo();
merceder.showInfo();