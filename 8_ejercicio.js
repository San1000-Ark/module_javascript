let age=parseInt(prompt("Enter your age in numbers"));
let nationality=prompt("Enter your nationality");

if (age>14 && age<36 && nationality.toLowerCase()==="colombia"){
    alert("You can participate in the tournament");
}else{
    alert("You cant participate in the tournament ");
}
