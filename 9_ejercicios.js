let value_Account=parseInt(prompt("Enter the value of your account: "));
let premium_card=prompt("Are you have a premium card? ANSWER (Y or N)");

if (value_Account<10000){
    alert("INSUFFICIENT BALANCE");
}else if(value_Account>10000 && value_Account<1000000){
    alert("MODERATED BALANCE");
}else if(value_Account>1000000 || premium_card.toLowerCase()=="y"){
    alert("PREFERRED CUSTOMER");
}else{
    alert("YOU ARE NOT A PREFERRED CUSTOMER");
}