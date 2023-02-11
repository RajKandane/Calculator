function cal(){
    
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var x=document.getElementById("ope").value;
    var y;

    if(x=='+'){
        y=parseInt(num1) + parseInt(num2);
        alert(y);
    }

    if(x=='-'){
        y=parseInt(num1) - parseInt(num2);
        alert(y);
    }

    if(x=='*'){
        y=parseInt(num1) * parseInt(num2);
        alert(y);
    }
   
    if(x=='/'){
        y=parseInt(num1) / parseInt(num2);
        alert(y);
    }
   
   
   
}