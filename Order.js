import { Food } from "./Food.js"


export class Order {
   constructor (orderItem) {
      this.store = [orderItem]
   }
   add(item) {
      try {
         this.store.push(item)
      } catch (error) {
         const warning = 'the order has been paid'
         return warning
      }
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
   getTotalPrice() {
      return this.store.reduce((accum, cur) => {
         return accum + cur.price
      }, 0)
   }
   getTotalCal() {
      return this.store.reduce((accum, cur) => {
         return accum + cur.calories
      }, 0)
   }
}

