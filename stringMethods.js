//1 **Length-example

// var a="sireesha"
// var b=a.length;
// console.log(a.length);

 //2. **toupperCase-example

// var a="sireesha"
// var b=a.toUpperCase();
// console.log(b);

//3. **toLowerCase-example

// var a="sireesha"
// var b=a.toLowerCase();
// console.log(b);

//4. **trim It will remove the blank spaces

// var a="   sireesha "
// console.log(a);
// var b=a.trim()
// console.log(b);

//5. **Include() it will check the Iam is there or not

// var a="Iam sireesha how may I help you."
// var b=a.includes("Iam")
// console.log(b);

//6.**charAt() it will check the letter of that number

// var a="Iam sireesha how may I help you"
// var b=a.charAt(11)
// console.log(b);

//7. **charCode
//  var a="Iam sireesha how may I help you"
//  var b=a.charCodeAt(5)
//  console.log(b);

//** 8. Search()
// var a="Iam sireesha how may I help you"
// var b=a.search("how")
// console.log(b);

// 9. **startswith
// var a="Iam sireesha how may I help you"
// var b=a.startsWith("how")
// console.log(b);

//10. **endswith

// var a="Iam sireesha how may I help you"
// var b=a.startsWith("how")
// console.log(b);

//11. **fromCharCode

// var a=  String.fromCharCode(100)
// console.log(a);


//12. **Match

// var a="Iam sireesha how may I help you"
// var b=a.match("may")
// console.log(b);

//13. **concat
// var a="hello "
// var b=a.concat("every one")
// console.log(b);

//14. **indexOf()
// var a="Iam sireesha how may I help you"
// var b=a.indexOf("how")
// console.log(b);

//15. **lastIndexOf()
// var a="I am sireesha how may I help you"
// var b=a.lastIndexOf("I")
// console.log(b);

// 16.**Split()

// var a="I am sireesha how may I help you"
// var b=a.split("   ")
// console.log(b);

//17. **Slice()

// var a="I am sireesha how may I help you"
// var b=
// a.slice(2,11)
// console.log(b);

 //18.** */ padStart()
// var a="2447";
// var b=a.padStart(10,"*")
// console.log(b);

//19. padEnd()
// var a="2447";
// var b=a.padEnd(10,"*")
// console.log(b);

// 20.String.fromCodePoint() gives the emojiesor symbols

// var a=String.fromCodePoint(978674)
// console.log(a);
// 21.**String.raw()
// var a=`D:\Achievers-it\amazon\images`
// var b=String.raw `D:\Achievers-it\amazon\images`
// console.log(b);
var a="my name is Sireesha iam living in Bangalore"
var b=a.match(/[A-Z]/g)
console.log(b) 
