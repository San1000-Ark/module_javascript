let total=0;
let op;

do{
    op=prompt("What do you want do? \n 1. Add product \n 2. Finished")

    if (op==="1"){
        let product=prompt("Enter the name of product: ")
        let price=parseFloat(prompt("Enter the price of product: "));
        if (!isNaN(price)){
            total+=price;
            alert("Product "+product+" add ... Total: "+total);
        }else{
            alert("Invalid price...")
        }
    }
}while(op!=="2");

alert("Finished-The total to buy is: "+total);