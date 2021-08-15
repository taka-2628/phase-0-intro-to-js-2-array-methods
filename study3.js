// .splice() method - 1 argument
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.splice(2);
//=> [ 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'  ]

console.log(days);
//=> [ 'Mon', 'Tue' ]


// .splice() method - 1 argument (negative)
const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
week.splice(-2);
//=> [ 'Sat', 'Sun' ]

console.log(week);
//=> [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]


// .splice() method - 2 arguments
const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
daysInWeek.splice(1, 2);
//=> [ 'Tue', 'Wed' ]

console.log(daysInWeek);
//=> [ 'Mon', 'Thu', 'Fri', 'Sat', 'Sun' ]


// .splice() method - 2 arguments (negative)
const daysInWeek2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
daysInWeek2.splice(-6, 2);
//=> [ 'Tue', 'Wed' ]

console.log(daysInWeek2);
//=> [ 'Mon', 'Thu', 'Fri', 'Sat', 'Sun' ]


// .splice() method - 3+ arguments - remove and add (MISSION - create Royal Straight Flash)
const cards = [
    "Nine of Clubs",
    "Eight of Diamond",
    "Ace of Clubs",
    "Jack of Spades",
    "Three of Hearts",
];

cards.splice(0, 1, "Ace of Spades")
// => [ 'Nine of Clubs' ]

console.log(cards);
/* =>
[
  'Ace of Spades',
  'Eight of Diamond',
  'Ace of Clubs',
  'Jack of Spades',
  'Three of Hearts'
]
*/

cards.splice(1, 2, "Kind of Spades", "Queen of Spades");
//=> [ 'Eight of Diamond', 'Ace of Clubs']

console.log(cards);
/* =>
[
  'Ace of Spades',
  'Kind of Spades',
  'Queen of Spades',
  'Jack of Spades',
  'Three of Hearts'
]
*/

cards.splice(-1, 1, "Ten of Spades")
//=> [ 'Three of Hearts' ]

console.log(cards);
/* =>
[
  'Ace of Spades',
  'Kind of Spades',
  'Queen of Spades',
  'Jack of Spades',
  'Three of Hearts'
]
*/


// .splice() method 3+ arguments - add
const books = ["Bleak House", "David Copperfield", "Our Mutual Friend"];

books.splice(2, 0, "Great Expectations", "Oliver Twist");

console.log(books);
/* =>
[
  'Bleak House',
  'David Copperfield',
  'Great Expectations',
  'Oliver Twist',
  'Our Mutual Friend'
]
*/


// Use bracket notation to replace a single element in an array
const cards2 = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
  ];
  
  cards2[2] = "Ace of Clubs";
  // => "Ace of Clubs"
  
  console.log(cards2);
  /*
  [
    'Ace of Spades',
    'Jack of Clubs',
    'Ace of Clubs',
    'Nine of Diamonds',
    'Three of Hearts'
  ]
  */
  