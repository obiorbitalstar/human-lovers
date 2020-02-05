// var dob = prompt("Your date of birth? (yyyy/mm/dd) formate please");
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(4, 2)) - 1;
// var day = Number(dob.substr(6, 2));
// var today = new Date();
// var age = today.getFullYear() - year;

//   function tellEm (){
// alert("your "+age+"s old");

// if(age>=25){
//     alert("Daaym your old");
// }
// else if(age<24 && age>18 ) {
//     alert("Your too young to enjoy sleep , keep going!");
// }
// else 
// {
//     alert("Your too young to be on this site go to sleep kid!");
// }
//   }

// tellEm();
// var think = prompt("Am thinking of a number between 0 and 10"); 

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// var x =1;
// var y =0; 


// if(think == getRandomInt(10)){
// alert("Nice, You guessed it right "); 
// }

var y = Math.floor(Math.random() * 10 + 1); 
  console.log (y);
      
    var guess = 1; 
      
      
    
    
    while (x !== y){
      var x = prompt("Guess a number between 1 and 10");
      
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
               break; 
   } 
   else if(x > y) 
   {     
       guess++; 
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") 
   } 
  }
   



// var d = parseInt(dob);
// function calcAge(d) {
//     var birthday = +new Date(d);
//     return ~~((Date.now() - birthday) / (31557600000));
//   }

// alert("your age is "+calcAge(d));