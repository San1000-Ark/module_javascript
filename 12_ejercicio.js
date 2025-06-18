let day_Time=prompt("Choose a day time(morning-afternoon-night)");
let weather=prompt("Choose a weather (sunny-rainy-cloudy)");
let umbrella=prompt("Have you a umbrella? Answer(Y/N)");

if (day_Time==="morning" && weather==="sunny" && umbrella==="n"){
    alert("Take a walk");
}else if(day_Time==="morning" && weather==="rainy" && umbrella==="n"){
    alert("Stay home");
}else if(day_Time==="morning" && weather==="cloudy" && umbrella==="n"){
    alert("Take a bus");
}else if(day_Time==="morning" && weather==="rainy" && umbrella==="y"){
    alert("Wait in your home a few moment... or leave to street with the umbrella")
}else if(day_Time==="afternoon" && weather==="sunny" && umbrella==="n"){
    alert("Take a walk");
}else if(day_Time==="afternoon" && weather==="rainy" && umbrella==="n"){
    alert("Stay home");
}else if(day_Time==="afternoon" && weather==="cloudy" && umbrella==="n"){
    alert("Take a bus");
}else if(day_Time==="afternoon" && weather==="rainy" && umbrella==="y"){
    alert("Wait in your home a few moment... or leave to street with the umbrella")
}else if(day_Time==="night" && weather==="sunny" && umbrella==="n"){
    alert("Take a walk");
}else if(day_Time==="night" && weather==="rainy" && umbrella==="n"){
    alert("Stay home");
}else if(day_Time==="night" && weather==="cloudy" && umbrella==="n"){
    alert("Take a bus");
}else if(day_Time==="night" && weather==="rainy" && umbrella==="y"){
    alert("Wait in your home a few moment... or leave to street with the umbrella")
}