//Hoofdstuk 2 If Statement//

new Date().getDate()          // Get the day as a number (1-31)
new Date().getDay()           // Get the weekday as a number (0-6)
new Date().getFullYear()      // Get the four digit year (yyyy)
new Date().getHours()         // Get the hour (0-23)
new Date().getMilliseconds()  // Get the milliseconds (0-999)
new Date().getMinutes()       // Get the minutes (0-59)
new Date().getMonth()         // Get the month (0-11)
new Date().getSeconds()       // Get the seconds (0-59)
new Date().getTime()   
const hours = new Date().getHours();
if (hours < 6) {
console.log('Het is momenteel nacht')
} else if (hours < 12 ) {
console.log('Het is momenteel ochtend')
} else if (hours < 18 ) {
console.log('Het is momenteel middag')
} else {
console.log('Het is momenteel avond')
}
let timeInHours = prompt ('Geef een tijd op alstublieft');
if ( timeInHours >= 0 && timeInHours < 25){
alert(`Uw opgegeven tijd is ${timeInHours}`);
} else {
alert ("Uw opgegeven tijd kan niet");
}
let Price = 55;
let Hoog = 11.55;
let Laag = 4.95;
let NoVAT = 0.00;
let VATPrice;
let priceInVAT;
if (Price + Hoog) { 
alert("Voor een product van 55 euro moet u met 21% BTW 11.55 euro BTW betalen dus in totaal 66.55 euro");
} else if (Price + Laag) {
alert("Voor een product van 55 euro moet u met 9% BTW 4.95 euro betalen dus in totaal 59.95 euro");
} else {
alert("Voor een product van 55 euro hoeft u geen BTW te betalen dus in totaal 55 euro");
}
let a = 5;
let b = 230;
let c = prompt(a,b)
let Animal = prompt ("Wat is uw favoriete dier?");
if (Animal == "Kikker") {
alert ("Een kikker kwaakt");
} else if (Animal == "Paard") {
alert ("Een paard hinnikt");
} else if (Animal == "Koe") {
alert ("Een koe loeit");
} else if (Animal == "Leeuw")  {
alert ("Een leeuw brult");
} else if (Animal == "Slang") {
alert ("Een slang slist");
} else if (Animal == "Goudvis") {
alert ("Een goudvis blubt");
} else {
alert ("Dit dier staat helaas niet in onze systeem");
}