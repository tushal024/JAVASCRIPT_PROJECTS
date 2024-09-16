function st(){
    let name = document.getElementById("name1").value
    let name1 = document.getElementById("name2").value
    let roll = document.getElementById("roll").value
    let s1 = +document.getElementById("s1").value
    let s2 = +document.getElementById("s2").value
    let s3 = +document.getElementById("s3").value
    let s4 = +document.getElementById("s4").value
    

    
    
    document.getElementById("f_name").innerHTML=`${name} ${name1} `;
    // document.getElementById("f_name").style.color="darkBlue"
    document.getElementById("r_name").innerHTML=`${roll}`;
    // document.getElementById("r_name").style.color="darkBlue"
    document.getElementById("ss1").innerHTML=`${s1}`;
    // document.getElementById("ss1").style.color="darkBlue"
    document.getElementById("ss2").innerHTML=`${s2}`;
    // document.getElementById("ss2").style.color="darkBlue"
    document.getElementById("ss3").innerHTML=`${s3}`;
    // document.getElementById("ss3").style.color="darkBlue"
    document.getElementById("ss4").innerHTML=`${s4}`;
    // document.getElementById("ss4").style.color="darkBlue"

// s1........................................
    
    if(s1>=90){
    document.getElementById("grr").innerHTML=`A`;       
    }
    else if(s1>=80 && s1<90){
        document.getElementById("grr").innerHTML=`B`;       
    }
    else if(s1>=60 && s1<80){
        document.getElementById("grr").innerHTML=`C`;       
    }
    else if(s1>=50 && s1<60){
        document.getElementById("grr").innerHTML=`D`;       
    }
    else if(s1>=33 && s1<50){
        document.getElementById("grr").innerHTML=`E`;       
    }
    else{
        document.getElementById("grr").innerHTML=`FAIL`;       
    }

// s2........................................
    
if(s2>=90){
    document.getElementById("grr1").innerHTML=`A`;       
    }
    else if(s2>=80 && s2<90){
        document.getElementById("grr1").innerHTML=`B`;       
    }
    else if(s2>=60 && s2<80){
        document.getElementById("grr1").innerHTML=`C`;       
    }
    else if(s2>=50 && s2<60){
        document.getElementById("grr1").innerHTML=`D`;       
    }
    else if(s2>=33 && s2<50){
        document.getElementById("grr1").innerHTML=`E`;       
    }
    else{
        document.getElementById("grr1").innerHTML=`FAIL`;       
    }

    // s3........................................
    
if(s3>=90){
    document.getElementById("grr2").innerHTML=`A`;       
    }
    else if(s3>=80 && s3<90){
        document.getElementById("grr2").innerHTML=`B`;       
    }
    else if(s3>=60 && s3<80){
        document.getElementById("grr2").innerHTML=`C`;       
    }
    else if(s3>=50 && s3<60){
        document.getElementById("grr2").innerHTML=`D`;       
    }
    else if(s3>=33 && s3<60){
        document.getElementById("grr2").innerHTML=`E`;       
    }
    else{
        document.getElementById("grr2").innerHTML=`FAIL`;       
    }
   // s4........................................
    
   if(s4>=90){
    document.getElementById("grr3").innerHTML=`A`;       
    }
    else if(s4>=80 && s4<90){
        document.getElementById("grr3").innerHTML=`B`;       
    }
    else if(s4>=60 && s4<80){
        document.getElementById("grr3").innerHTML=`C`;       
    }
    else if(s4>=50 && s4<60){
        document.getElementById("grr3").innerHTML=`D`;       
    }
    else if(s4>=33 && s4<50){
        document.getElementById("grr3").innerHTML=`E`;       
    }
    else{
        document.getElementById("grr3").innerHTML=`FAIL`;       
    }
    let total= s1+s2+s3+s4;
    var par= Number(total/4);
    document.getElementById("ss").innerHTML=`${total}`;
    document.getElementById("parr").innerHTML=`${par} %`;

{if(s1 >=33 && s2 >=33 && s3 >=33 && s4 >=33  ){
    if(par>=33){
        document.getElementById("pf").innerHTML=`PASS`;
    }
    else{
        document.getElementById("pf").innerHTML=`FAIL`;
    }
}
else{
    document.getElementById("pf").innerHTML=`FAIL`;
}

}





    // document.getElementById("tt").innerHTML=`${+total}`;
    // document.getElementById("parr").innerHTML=`${+par}`;

    if(par>=90){
        document.getElementById("uu").innerHTML=`A`;       
    }
    else if(par>=80 && par<90){
        document.getElementById("uu").innerHTML=`B`;       
    }
    else if(par>=70 && par<80){
        document.getElementById("uu").innerHTML=`C`;       
    }
    else if(par>=60 && par<70){
        document.getElementById("uu").innerHTML=`D`;       
    }
    else{
        document.getElementById("uu").innerHTML=`   -`;       
    }
}
