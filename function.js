// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.

// 1. Create an array containing the names of all items in the inventory maximum of 10.
let fruits=["Mango","Lemon","Pawpaw","Guavo","Bananas","Oranges","Apple","Melon","Pears","Kiwi"]

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let items=[12,34,56,78,90,122,33,44,45,67]

// Write a function to add a new item to the inventory, updating both arrays.
function addItem(names,quantities){
   // let fruits=["Mango","Lemon","Pawpaw","Guavo","Bananas","Oranges","Apple","Melon","Pears","Kiwi"]
    fruits.push(names)
    items.push(quantities)

}
addItem("Pineaples",123)
console.log(fruits)
console.log(items)

// Write a function to update the stock quantity of an existing item.
function stockQuantity(items){


}


// Write a function to calculate the total number of items in the inventory.
function calculateTotal(fruits){
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i]
  }
  
  return total
}
console.log(calculateTotal())

// Write a function to find the item with the lowest stock quantity.

function findLowest(){
    lowestindex=0
    for(let i=0;i<lowestindex;i++){
           lowestindex=i
    }
    return items[lowestindex]
}

console.log(findLowest())

