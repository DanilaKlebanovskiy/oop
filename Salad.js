import { Food } from "./Food.js"


export class Salad extends Food {
   static CEASER = { tugrik: 50, cal: 20, name: "ceaser" }
   static OLIVIE = { tugrik: 100, cal: 40, name: "olivie" }
   constructor (size, type) {
      const perWeight = 100
      const totalPrice = (type.tugrik * size) / perWeight
      const totalCal = (type.cal * size) / perWeight
      super(size, type.name, totalPrice, totalCal)
   }
}