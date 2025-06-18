let password="Riwi2025*"
let try_User=3;
let try_Admin=1;
let blocked=false;

while(!blocked){
    let user=prompt("Enter the user: ");
    let pass=prompt("Enter the password");

    if (user.toLowerCase()==="santiago"){
        if(pass===password){
            alert("Correct password");
            break;
        }else{
            try_User--;
            console.error("Incorrect password "+try_User);
            if (try_User===0){
                document.write("Blocked page")
                blocked=true;
            }
        }
    }else if(user.toLowerCase()==="admin"){
        if(pass===password){
            alert("Correct password");
            break;
        }else{
            console.error("Incorrect password, no more try...");
                document.write("Blocked page");{
                blocked=true;
            }
        }
    }else{
        console.error("Unknown user")
    }
}