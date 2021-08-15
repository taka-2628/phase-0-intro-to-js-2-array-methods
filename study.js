// .push() method
const superheroes = ["Catwoman", "She-Hulk", "Jessica Jones"];
superheroes.push("Wonder Woman");
//=> 4

console.log(superheroes);
//=> [ 'Catwoman', 'She-Hulk', 'Jessica Jones', 'Wonder Woman' ]


// .unshift() method
const cities = ["New York", "San Francisco"];
cities.unshift("Los Angeles");
//=> 3

console.log(cities);
//=> [ 'Los Angeles', 'New York', 'San Francisco' ]


// ... (spread operator) - make a copy
const coolCities = ["New York", "San Francisco"];

const copyOfCoolCities = [...coolCities];

console.log(copyOfCoolCities);
//=> ["New York", "San Francisco"]


// ... (spread operator) - make a copy and add elements at the beggining
const niceCities = ["New York", "San Francisco"];

const niceCitiesAdded = ["Los Angeles", ...coolCities];

console.log(niceCitiesAdded);
//=> ["Los Angeles", "New York", "San Francisco"]


// ... (spread operator) - make a copy and add elements at the end
const internationalCities = ["New York", "Los Angeles", "London"];

const internationalCitiesAdded = [...internationalCities, "Tokyo"]

console.log(internationalCitiesAdded);
//=> [ 'New York', 'Los Angeles', 'London', 'Tokyo' ]


// .pop() method
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.pop();
//=> "Sun"
console.log(days);
//=> [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]


// .shift() method
const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
week.shift();
//=> "Mon"
console.log(week);
//=> [ 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
