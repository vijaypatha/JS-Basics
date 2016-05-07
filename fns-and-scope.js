//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
    if (name === "Tyler") {
        return true;
    } else {
        return false;
    }
}
isTyler(Tyler);

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName (){
  var userName = prompt("Name?");
  return userName;
}

  


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 function welcome() {
   alert("welcome " + userName);
 }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here - parameters are placeholders
  // arguments are actual values passed to a function via placeholders 
  function malt(a,b) { //a, b are paramenters
    var x = a * b;
  }
  malt(3,10); //3 and 10 are arguments


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  
//   false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (a special Number value meaning Not-a-Number!)

//use conditional statments



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    return myName;
  }
  myName("vijay");
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName);



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn () {
  return function() {
    return "vij";
  }
}
 

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn =  outerFn();

//Now invoke innerFn.
