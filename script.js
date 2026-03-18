function calculateResult(){
    let n=document.getElementById("subjects").value;

    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject No."+ (i+1)));
        total+=x;

    }
    let average=total/n;
    let grade;
    if(average>40){
        if(average>90){
            grade="A+";
        }
        else if(average>75){
            grade="A";
        }
        else{
            grade="B";
        }
    }
    else{
        grade="F";
    }

        let r=document.getElementById("result.values");
        innerHTML="total marks"+total+"<br/>"+"average"+average+"<br/>"+"grade"+grade+"<br/>";}