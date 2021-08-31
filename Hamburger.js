import { Food } from "./Food.js"

export class Hamburger extends Food {
   static SIZE_SMALL = { tugrik: 50, cal: 20, size: "small" }
   static SIZE_LARGE = { tugrik: 100, cal: 40, size: "large" }
   static STUFFING_CHEESE = { tugrik: 10, cal: 20, name: "cheese" }
   static STUFFING_SALAD = { tugrik: 20, cal: 5, name: "salad" }
   static STUFFING_POTATO = { tugrik: 15, cal: 10, name: "potato" }
   constructor (size, stuffing) {
      const totalPrice = size.tugrik + stuffing.tugrik
      const totalCal = size.cal + stuffing.cal
      super(size.size, stuffing.name, totalPrice, totalCal)
   }
}

