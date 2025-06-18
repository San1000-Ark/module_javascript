let login=prompt("ARE YOU LOGGED IN? Answer(Y/N)");
let active_Reports=prompt("ARE YOU HAVE ACTIVE REPORTS? Answer(Y/N)");
let user_premium=prompt("ARE YOU PREMIUM USER? Answer (Y/N)");
let age_User=parseInt(prompt("WHAT IS YOUR AGE? IN INT NUMBER"));

if (login.toLowerCase()==="y" && active_Reports.toLowerCase()==="n" && age_User>21 || user_premium.toLowerCase()==="y"){
    alert("You can access to the offer");
}else{
    console.error("You cant access to the offer");
}
