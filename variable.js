// // // video --1
// // const accountId = 144553
// // let accountEmail = "jatinnayak0909@gmail.com"
// // var accountPasswords = "1234"
// // accountcity = "Bubaneswar"

// // // accountId = 2; // if const is used before a variavle name it cannot be modified .
// // console.log(accountId);
// // accountEmail = "jatin@gmail.com"
// // accountPasswords = "123"
// // accountcity = "DSS"

// // console.table([accountId , accountEmail ,accountPasswords , accountcity])

// // //there are two different types of method to declear variables 
// // //1. let
// // //2. var -> not used these day because of its no restriction in scope of variable
// // // prefer not to use var because issues of sblock and functional scope

// // // if the value is not assigned to the variable at the time of decleration it remains as undefinded


// // // video -- 2


// // // "use strict" treat all JS code as newer version
// // //alert(3+3) it will not work as we are not working on browser we are on node js


// //primitive data types
// /*
// number = 2^53
// bigint
// string
// boolean
// null  -> standalone value
// undefined
// symbol -> to find and assign the uniqueness

// */

// // to check the data type
// //console.log(typeof data);
// // undefined shows data tyoes as undefined ,  which is different from the normal behaviour of the data type
// // null shows data types as object , which is different from the normal behaviour of the data type


// //video -> 3
// //type casting 
// // datatype(data) _-> first letter should be in caps 

// /* if the input is  like 232cs in the number data type , 
// int this case if we check the data type of this inputed value it will
//  show its datatypes as number  but if we try to kprint the value of 
//  that variable next time it will show output as NaN(not a number)*/

//  // video 4
//  /*
//   operations in js
//     use  - symbole before variable name to make it negative module
     
//     according to the rule 
//     this operation and there given output 

//     ("1" + 2 + 2) -> its output will be 122

//     (1 + 2 + "2") -> its output will be 132
        
/*
        console.log(true)
        if we change this line to console.loog(+true) the output will
        be 1 but console.log(true+) this will throw an error of
        unexpected at this place

*/
/*
 video -> 5 
 comparision  
 null > 0 --> false
 null == 0 --> false
 null >= 0 true 
 js does not have a proper rule for the comparisioin operation ,
  while comparison it convet the null to 0 but int the comparision
   case number 2 its show output as false.

   strict check -> ===
   in the strict check it also checks the data types also .
    

*/

/* 
video -> 6
data types non primitive

1. reference type -> array , object , functions
    symbol is used to provide a unique id to data or a variable even it have the same data types or same data in it .
    use n at last of a number to make it bigint data type

*/
/*
  video -> 7

  there are two types of memory in js 
  1. stack (Primitive)
  2. heap( Non Primitive) -> in this we get the reference of the memory address

  
*/

/* 
 video -> 8

 to print the variable we should use the back ticks `` it allows you for string interpretation
 ex -> console.log(`Hello my name is ${variable name} and my repo count is ${variable name}`)
  this method also allow you to use the diffrent method with the variable at the same time 


*/

/*
 video -> 9
    numbers and maths
    toLocalString('en-IN') it is used for the currency precision coma
*/


/*
  video -> 10
  dates in js
  it is used to repersent the single moment in time int a platform 
  mydate = new Date() --> object of date type and data type of date is object
  month in js start from 0

  use of inbuit string function to get date in correctb format
  1. toDateString()
  2. toLocalString()

time stamp in dates
    mytimestamp = Date.now()
    console.log(mytimestamp)
    console.log(mytimestamp.getTime()) -> beacause the mytimestamp is a object
    date have many built in function to utilize date


    vvi method
        bewdate.toLocalString('default',{
        weekday : "long"
        timeZone :  etc.....})
*/
