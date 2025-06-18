let note=prompt("Ingresa la nota: ")

if (note<3){
    console.log("Reprobaste");
}else if(note>=3 && note==4){
    console.log("Aprueba");
}else if(note>4){
    console.log("Sobresaliente");
}