// what is object: object  can store multiple data like primitive and non-primitive . 
//  it can store values in the form of key and value bases.
// thereee are 6 ways to define the objects
//  1. using an object literal
//  2.using the new keyword
//  3.using an object constructor
//  4.using object.assign()
//  5.using object.create()
//  using object.form entities()

/*1.using an object literals */

// let movie={
//     name:"siri",
//     age:25,
//     gender:"female"
// }
// adding the key values using dot notation

// movie.city="blr"
// console.log(movie)

// modify or adding values using bracket notation

// movie["name"]='suraj'
// console.log(movie);

/*2.using  new keyword */

// function person(name,age,gender,dob){
// this.name=name,
// this.age=age,
// this.gender=gender,
// this.dob=dob
// }

// let siri=new person("siri",25,"female","21-11-1998")
// let siri1=new person("siri2",25,"female","21-11-1998")
// Object.prototype.greeting=function(){   /*object.proto type is refer the all the objects */
//     console.log(`welcome ${this.name}`);
// }
// siri.greeting()
// siri1.greeting()

// var person=function(name,age,gender){
// person.Name=name;
// this.age=age;
// this.gender=gender
// }
// let person1=new person("siri",25,"female")
// let person2=new person("siri",25,"female")
// let person3=new person("siri",25,"female")

// console.log(person1,person2,person3);

// Object.prototype.greeting=function(){
//     console.log("hello every one");
// }
// person.greeting()
// let obj1={
//     name:"Siri",
//     city:"bangalore",
//     state:"karnataka",
//     message:function(){
//         console.log(this);
//     }


// }
// obj1.message()
// let mobile_info={
// model:"vivo-z1 pro",
// isavailable:true,

// }
// let mobile_price={
//     ram_4gb:10000,
//     ram_8gb:20000
// }
// // let mobile=Object.assign(mobile_info,mobile_price)
// let mobile={...mobile_info,...mobile_price}
// console.log(mobile);
// let person={
//     name:"siri",
//     age:25,
    
// }
// person.city="bangalore"
// let message=function(){
//     // console.log(person);
//     console.log(`hello ${person.name}`);
// console.log(`hello ${person.name} welcom to ${person.city}`);}
// message()
// console.log(person.city);
/*Example:4 */
// let movie={
//     name:"RRR",
//     director:"Rajamouli",
//     music_director:"taman",
//     release:2023,
//     message:function(){
//         console.log(`very good movie ${this.name} ${this.director} ${this.music_director} ${this.release}`);
//     }
   
// }
// movie.message()

// console.log(movie.name);/*This one way to acces the values */
// console.log(movie["director"]);/*This one way to acces the values */
// console.log(movie.name="rrrr");/*This this one way to update the values */
// console.log(movie);
// movie.release="2024";/*This this one way to update the values */
// console.log(movie);
// movie["budgets"]="mangli";/*this is another way to add the values */
// console.log(movie);

/*Example:5 */
//  let movie=new Object()
//  console.log(movie); 
//  movie.name="RRR"
//  movie["director"]="rajamouli",
//  console.log(movie);

/*Example:6 */

// function person(name,age,gender){
//     this.name=name,
//    this.age=age,
//    this.gender=gender

// }

// let person1= new person("siri",25,"female")
// var a= new person("siri",25,"female");
// console.log(a);

/* example7 */
// let person3=Object.create(person1)
// person3:("rama",33,"female")
// person3.name="rama";
//     console.log(person3);
let ary=[10,13,8,12,14,18,7,17]
function myFunction(n1,n2,...n){
console.log(n);
}
myFunction(...ary)



