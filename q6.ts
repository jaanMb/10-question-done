/*Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

const myname: string = "  luqman  ";
// \t used for tab/space
console.log(myname);
console.log(myname.trim())
const myname1: string = "\tluqman"
// \n used for tab/space
const mynamea: string = "\nluqman"
console.log(myname,myname1,mynamea);
