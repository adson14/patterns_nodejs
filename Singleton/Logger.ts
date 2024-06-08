
export class Logger {

  private static instance: Logger | null = null;
  private message: string = "";

  private constructor() {}

  static getInstance(): Logger {
    if (this.instance === null) {
        this.instance = new Logger();
        console.log("Instanciou");
    }
    return this.instance;
  }
  get getMessage() : string {
    return this.message;
  }
  addMessage(message: string) : void {
    this.message = message;
  }
}
