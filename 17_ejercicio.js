let maxTries=3;
let correctUser="santiago";
let correctPass="123";

let attempts=0;

while (attempts<maxTries) {
    let input_name=prompt("Enter the username: ");
    let input_pass=prompt("Enter the password: ");

    if (input_name===correctUser && input_pass===correctPass) {
        alert("Access granted. Welcome!");
        break; 
    } else {
        attempts++;
        let remaining=maxTries-attempts;
        alert("Incorrect credentials. Attempts left: "+remaining);
    }

    if (attempts===maxTries) {
        document.write("LOGIN BLOCKED");
    }
}

