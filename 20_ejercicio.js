let total_Notes=0;
let students_Risk=0;
let major_Note=0;
let minor_Note=5;

for (let i=1;i<=5;i++){
    let note=parseInt(prompt("Enter the note student:  "+i+" :"));
    total_Notes=note;

    if (note<3){
        alert("Student "+i+" is in risk");
        students_Risk++;
    }

    if (note>major_Note){
        major_Note=note;
    }

    if(note<minor_Note){
        minor_Note=note;
    }
}

let average=total_Notes/5;

alert("General average: "+average.toFixed(2));
alert("Risk students: "+students_Risk);
alert("Major note: "+major_Note);
alert("Minor note: "+minor_Note);