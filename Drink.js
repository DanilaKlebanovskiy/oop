import { Food } from "./Food.js"

export class Drink extends Food {
   static COLA = { tugrik: 50, cal: 20, name: "cola" }
   static COFFEE = { tugrik: 100, cal: 40, name: "coffee" }
   constructor (type) {
      super(null, type.name, type.tugrik, type.cal)
   }
}


