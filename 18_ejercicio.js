let op=0;

do{
    op=Number(prompt("Welcome \n 1.Show profile \n 2.Edit profile \n 3.Sign out"))
        switch(op){
            case 1:
                alert("Hello world");
                break;
            case 2:
                alert("bye world");
                break;
            case 3:
                alert("BYE BYE");
        }
}while(op!==3)