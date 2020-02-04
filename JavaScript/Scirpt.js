var dob = prompt("Your date of birth? (yyyy/mm/dd) formate please");
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
alert("your "+age+"s old");

if(age>=25){
    alert("Daaym your old");
}
else if(age<24 && age>18 ) {
    alert("Your too young to enjoy sleep keep, going!");
}
else 
{
    alert("Your too young to be on this site go to sleep kid!");
}
