// Array methods
// 1.sort(): this is for single digit
// let a=[2,4,7,8,9,5,1,6,1,3]
// let b=a.sort()
// console.log(b);
// ====>For dort method single values directly we can sort the values, For double double  digit we can use A-B method

// let a=[20,32,5,7,80,98,100,56]
// let b=a.sort(function(a,b){
//     return a-b;
// })
// console.log(b);

// 2.reverse()

// let a=[20,32,5,7,80,98,100,56]
// let b=a.reverse()
// console.log(b);

// 3.pop():this is used to remove last index Element.
// let a=[20,32,5,7,80,98,100,56]
// a.pop()
// console.log(a);

// 4.push():adding the value at last
// let a=[20,32,5,7,80,98,100,56]
// a.push(46)
// console.log(a);

// 5.shift(): this will remove at first index.

// let a=[20,32,5,7,80,98,100,56]
// a.shift()
// console.log(a);

// 6.unshift():it will used to remove at first index value only.

//  let a=[20,32,5,7,80,98,100,56]
// a.unshift(45)
// console.log(a);

// 7. concat(): it is used to combine the element

// let a=["siri","madhu","giri","suraj"]
// let b=["sai"]
//  let c=a.concat(b)
// console.log(c);
// let b=[30,87,98]
// let c=a.concat(b)
// console.log(c);

// 8.join():it will display as one string

// let a=["siri","madhu","giri","suraj"]
// let b=a.join(" ")
// console.log(b);

// 9. splice()it will add element in perticular elements

// var a=["siri","madhu","giri","suraj"] 
// a.splice(2,0,"sai")
// console.log(a);

// 10.slice():it will cutting a portion of array elements

// var a=["siri","madhu","giri","suraj"] 
// var b=a.slice(1,3)
// console.log(b);


// 11.isarray():it will check it is array or not and return boolean value
// var a=["siri","madhu","giri","suraj"] 
// var b=Array.isArray(a)
// console.log(b);


// 12.indexof():it will check for index values
// var a=["siri","madhu","giri","suraj"] 

// var b=a.indexOf("giri")
// console.log(b);

// 13.find(): find the value or index

// var a=[1,5,46,4,47,5,78] 
// var b=a.find(function(x){
// return x>10;
//     }
// )
// console.log(b);

// 14.findindex(): it will return index value
// var a=[1,5,46,4,47,5,78] 
// var b=a.findIndex(function(x){
// return x>10;
//     }
// )
// console.log(b);

// 15.include():it will check whether the value is there or 

// var a=[2,4,6,8,3,8,5]
// var b=a.includes(3)
// console.log(b);

// 16.some():finding the whether the value is there or not and return boolean value

// var a=[2,4,6,8,3,8,5]
// var b=a.some(function(x){
// return x>=5
// })
// console.log(b);

// 17.map():if we want do  anything to every element  and also it will check the condition 

// var a=[1,3,56,7,4,65,9]
// var b=a.map(function(x){
//     return x*10

// })
// console.log(b);
// 18.flat():it will usesd to nested array to simple array

// var a=[1,3,5,7,[3,[272,[36,[73,77,],4],87,],5,6],35,46,[76,75,7]]
// var b= a.flat(Infinity)
// console.log(b);

// 18.reduce():sum all values


// var a=[5,2,5,7]
// var b=a.reduce(function(a,c){
//     return a+c
// })
// console.log(b);

// 19.toString():it will conver entire as a string
// var a=[2,4,6]
// var b=a.toString()
// console.log(b);
// var a=["siri","madhu"]
// var b=a.fill("suraj")
// console.log(b);



