//Slicing and Spreading
const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
];

const newMenu = [
    ...menu.slice(0, 1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(-1)
]

console.log(newMenu);
/*
[
    'Jalapeno Poppers',
    'Veggie Burger',
    'House Salad',
    'Teriyaki Tofu',
    'Onion Rings'
]
*/
console.log(menu);
/*
[
    'Jalapeno Poppers',
    'Cheeseburger',
    'Fish and Chips',
    'French Fries',
    'Onion Rings'
]
*/

