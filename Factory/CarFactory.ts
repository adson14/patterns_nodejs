import { Audi } from "./Audi";
import { Bmw } from "./Bmw";
import { Mercedes } from "./Mercedes";

class CarFactory{

  createObject(type: string) {
    switch(type){
      case "Audi":
        return new Audi();
      case "Bmw":
        return new Bmw();
      case "Merceder":
        return new Mercedes();
      default:
        return null;
    }
  }
}

module.exports = new CarFactory();