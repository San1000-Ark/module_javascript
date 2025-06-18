/*let color_traffic_light="red";

switch(color_traffic_light){
    case"red":
    console.log("Stop");
    break;
    case"yellow":
    console.log("Slow down");
    break;
    case"green":
    console.log("ADVANCED");
    break;
    default:
        console.log("Unknown color");
}*/

let color_Light=prompt("Enter the color of the traffic light");

if(color_Light==="red"){
    console.warn("Stop")
}else if(color_Light==="yellow"){
    console.warn("Slow down");
}else if(color_Light==="green"){
    console.warn("Advanced");
}else{
    console.error("Unknown color");
}

