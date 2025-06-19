let count_Names=0;
for(let count=0;count<5;count++){
    let name=prompt("Enter the name: "+(count+1));
    if (name.length>=3){
        console.log("The name "+name+" have 3 characters or more");
        count_Names++
        console.log(count_Names);
    }else{
        console.error("Error");
    }
}
