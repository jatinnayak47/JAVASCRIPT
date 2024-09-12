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
        newdate.toLocalString('default',{
        weekday : "long"
        timeZone :  etc.....})
*/
/*
 video -> 11
 arrays 
  
 const myarray = [0,1,2,3,4,5,6] the element in the array can be different and are variable in the size
 unshift -> its is a built in function which is used to add a element in the starting of the array 
 shift -> its is a built in function which is used to dremkove the element from the starting

 there are some function in js which is used to find the search about  the element in the data such as

 includes(data) -> return the ans in boolean type
 indexOf(data) -> return the index of element if persent or return -1 if not present

 join() -> built in funcltion used to convert the array into string


 slice -> it is used to slice the array from given index (start index , end index) in this method it does not include the last index

 splice -> it is used to slice the array from given index (start index , end index) in this method it include the last index also

 the main difference b/w slice and splice is that slice works on the copy / deep copy of the array which doe not effect the original array 
 but splice works on the shallow copy of the array and also modify the original arrays 

*/

/*
  video -> 12

  array - 2

  to add two array instead of using concat operator we can use spread meathod 
  syntaax of spread operator is [...array1 name,...array2 name,...]

  Returns a new array with all the sub array concatenated into it recursively up to the specific depth
  array_name.flat(depth) ->  we use infinity here also to let the compiler find the last depth of the array 

  convert the data to array 
  Array.from(data) -> in case of primitive data type
  Array.from({object}) ->  in this case need to mention that we have to  use key or the value to  make the array
  Array.of(data1,data2,.......datan)o -> use to form array  using the different variable together to form an array

*/

/*
 video -> 13 && 14
 object  

    //singleton 
    //constructor method


    Object.freez(object name)  -> it is used to freez the object which stops the object from getting modified

     object.assign -> use to concatenate the objects.
     can also use the spread method to concatenate

     object part -> 2

     object derefrencing

     const course = {
      coursename: "js in hindi"
      price: 909
      courseInstructor: "jatin"
     }
    
     normal method to access the course data members is 
     course.datamember -> course.courseInstructor

     destructure method to access the values from the object

     const {courseInsturctor} = course 
     now we can dirctly access the courseInstructor 
     we can also can create alis for the courseInstructor by following the below syntax
      const {courseInstructor : alis  name} = course
       
*/


/*
   video - 15 && 16
    fucntion in js

     function addtwonumber(number1 , number2) -> function decleration
     {
        console.log(number1 + nmuber2)
     }
      the above function is not returning anything
     addtwonumbers(3 , 4) -> function call 

     function addtwonumber(num1,num2)
      {
        let result = num1+ num2
        return result
      }
      let result = addtwonumber(num1,num2)

    function part -> 2

    function calcartprice(...num1) ->> ... are the rest operators , it will combine all the input and form a array of the input.
    {
      return num1
    }
    console.log(calcartprice(200,300,400)) 

    function calcartprice(val1,val2,...num1)
    {
      return num1;
    }
    console.log(calcartprice(200,300,400,500))

    the output of thee num1 will be 400 and 500 because the 200 and 300 wil go to the val1 nad val2

    handle object in function
    
    const user = {
    username: "hitesh",
    price: 199
    }

    function handleobject(anyobject)
    {
      console.log(`Username is ${anyobject.username} 
      and the price is ${anyobject.price}`);
    }
    handleobject(user)

    new method to create and pass object
    handleObject({
      username : "sam"
      price : 1999
    })

    const myNewArray = [200,300,400,500]

    function returnSecondValue(getArray){
      return getArray[1];
    }
      console.log(returnSecondValue(mynewArray));
*/

