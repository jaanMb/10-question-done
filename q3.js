/*Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
var personname1 = "luqman";
// lower case
console.log(personname1.toLocaleLowerCase());
//uper case
console.log(personname1.toUpperCase());
//tital case
var firstletter = personname1.charAt(0).toLocaleUpperCase();
var restletters = personname1.slice(1).toLocaleLowerCase();
var titlecase = firstletter + restletters;
console.log(titlecase);
