let pass=["Abc12#345678","15645?","fsajkJuhhHK5489=="];

function validate(pass){
    let express_R=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return express_R.test(pass);
}

for(let i=0;i<pass.length;i++){
    let password=pass[i];

    if(validate(password)){
        console.log(password+" correct password found...");
    }else{
        console.log(password+" Not valid, update the password...");
        
    }
}

//Abc12#345678
