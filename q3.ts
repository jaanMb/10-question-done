 /*Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
const personname1: string = "luqman"
// lower case
console.log (personname1.toLocaleLowerCase());
//uper case
console.log (personname1.toUpperCase());
//tital case
let firstletter:string = personname1.charAt(0).toLocaleUpperCase();
let restletters: string = personname1.slice(1).toLocaleLowerCase();
let titlecase = firstletter + restletters;
console.log (titlecase);
