const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday); // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80

//setter and getters js6
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

//tworzy obiekt stringFunctions!!
import * as stringFunctions from "./string_functions.js";
// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Promise
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data").then(result => {
      console.log(result);
    });
  } else {
    reject("Data not received");
  }
});

//regular expression = regexlet waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// w regexach | dziala jak or xd
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //; // Change this line
let result = fccRegex.test(myString);
//ignoruj upercase or lowercase

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


let myRegex = /[^aeiou^0-9]/gi; //nie ma samoglosek i liczb

regular expression znaczenie

g - czy pasuje do kliku?
i - ignoruj uppercase lub lowercase
. - cokolwiek pasuje i konczy sie na powiedzmy un ...un
[] - znajdz wszystkie litery jakie pasuja do bracketa przykladowo g[uo]wno
mozna tez okreslic jak od do np [a-e];
^ - odwrotnie do regexa - slowa, litery, liczby ktore nie pasuja
/g+/ (na przyklad) - jezeli slowo zawiera wiecej niz jedno g lub jedno g
Ab*  - * oznacza, ze znajdz wszystko co pasuje nie tylko dwa przykladowo Abbbbbbbbbb
? = najblizszy mozliwy match przykladowo "Titanic" t[[a-z]*?i] zwroci Ti
$ = szukaj na koncu stringa

\w = skrot od a-z A-Z 0-9
\d skrot od 0-9
\D - [^0-9]
\s - spacje!!
\S - nie szukaj spacjid
