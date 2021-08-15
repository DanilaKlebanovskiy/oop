# Homework OOP
## How to use
### to create Hamburger
```
const smallHamb = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD)
```
### to create Drink
```
const drinkCola = new Drink(Drink.COLA)
```
### to create Salad
```
const saladCeaser = new Salad(Salad.CEASER)
```
### Food's method
```
getSize()
getType() 
calculatePrice()
calculateCalories() 
```

### to create Order and add/delete items
```
const orderOne = new Order(smallHamb)
orderOne.add(drinkCola)
orderOne.add(Salad) 
// to delete Cola
orderOne.delete(1)
// to calculate total price
orderOne.totalPrice() 
// to calculate total calories
orderOne.totalCal() 
```

### to pay order and forbid any changes

```
orderOne.paid()
orderOne.add(new Drink(Drink.COLA)) // throw exception 
```

