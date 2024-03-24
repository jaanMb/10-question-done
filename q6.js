/*Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
var myname = "  luqman  ";
// \t used for tab/space
console.log(myname);
console.log(myname.trim());
var myname1 = "\tluqman";
// \n used for tab/space
var mynamea = "\nluqman";
console.log(myname, myname1, mynamea);
