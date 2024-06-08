export class Car {

  private name: string
  constructor(name: string) {
    this.name = name +' '+Math.random().toString(36).substring(7);
  }

  showInfo() {
    console.log(`Car: ${this.name}`);
  }

}