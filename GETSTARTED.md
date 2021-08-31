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
const size = 200
const saladCeaser = new Salad(size, Salad.CEASER)
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
orderOne.add(saladCeaser)
// to delete Cola
orderOne.delete(1)
// to calculate total price
orderOne.getTotalPrice() 
// to calculate total calories
orderOne.getTotalCal() 
```

### to pay order and forbid any changes

```
orderOne.paid()
orderOne.add(new Drink(Drink.COLA))  
```

if you have problem with CORSE you should use local server.
