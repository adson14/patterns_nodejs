import { Logger } from "./Logger";

const log = Logger.getInstance();
log.addMessage("Hello World1");
console.log(log.getMessage);

const log2 = Logger.getInstance();
log2.addMessage("Hello World2");
console.log(log2.getMessage);