"use strict";
class Order {
   constructor (orderItem) {
      this.store = [orderItem]
   }
   add(item) {
      this.store.push(item)
   }
   delete(idx) {
      if (idx < 0) {
         return
      }
      this.store.splice(idx, 1)
   }
   static _deepFreeze(obj) {
      Object.keys(obj).forEach(item => {
         if (typeof obj[item] === 'object' && !Object.isFrozen(obj[item])) {
            Order._deepFreeze(obj[item])
         }
      })
      return Object.freeze(obj)
   }
   paid() {
      return Order._deepFreeze(this)
   }
   totalPrice() {
      return this.store.reduce((accum, cur) => {
         return accum + cur.price
      }, 0)
   }
   totalCal() {
      return this.store.reduce((accum, cur) => {
         return accum + cur.calories
      }, 0)
   }
}

class Food {
   constructor (size, type, price, calories) {
      this.size = size
      this.type = type
      this.price = price
      this.calories = calories
   }
   get getSize() {
      return this.size
   }
   get getType() {
      return this.type
   }
   get calculatePrice() {
      return this.price
   }
   get calculateCalories() {
      return this.calories
   }
}

class Hamburger extends Food {
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

class Salad extends Food {
   static CEASER = { tugrik: 50, cal: 20, name: "ceaser" }
   static OLIVIE = { tugrik: 100, cal: 40, name: "olivie" }
   constructor (size, type) {
      const perWeight = 100
      const totalPrice = (type.tugrik * size) / perWeight
      const totalCal = (type.cal * size) / perWeight
      super(size, type.name, totalPrice, totalCal)
   }
}

class Drink extends Food {
   static COLA = { tugrik: 50, cal: 20, name: "cola" }
   static COFFEE = { tugrik: 100, cal: 40, name: "coffee" }
   constructor (type) {
      super(null, type.name, type.tugrik, type.cal)
   }
}


