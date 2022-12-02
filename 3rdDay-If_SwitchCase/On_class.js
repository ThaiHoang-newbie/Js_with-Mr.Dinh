function myFunction(){
    var x = document.getElementById("year").value;
    var se1 = document.getElementById("semester1").value;
    var se2 = document.getElementById("semester2").value;
    var y;
    if (x == 1){
        y = (parseInt(se1) + parseInt(se2*2))/3;
    }else if(x == 2){
        y = (parseInt(se1) + parseInt(se2*3))/4;
    }else{
        y = (parseInt(se1) + parseInt(se2*4))/5;
    }
    document.getElementById("ok").innerHTML = y;
}
function myFunctionCancle(){
    document.getElementById("semester1").value;
    document.getElementById("semester2").value;
    document.getElementById("ok").innerHTML = 0;
}