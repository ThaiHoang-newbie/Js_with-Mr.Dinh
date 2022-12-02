function myFunction(){
    var se1 = document.getElementById("semester1").value;
    var se2 = document.getElementById("semester2").value;
    let x = document.getElementById("years").value;
    var text = "";
    let y = 2;
    switch (x){
        case "1":{
            y = (parseFloat(se1) + parseFloat(se2*2))/3;
            break;
        }
        case "2":{
            y = (parseFloat(se1) + parseFloat(se2*3))/4;
            break;
        }
        case "3":{
            y = (parseFloat(se1) + parseFloat(se2*4))/5;
            break;
        }
    }
    document.getElementById("sum").innerHTML = y;
    if (y >=9){
        text = "Hoc sinh gioi!"
        document.getElementById("bg").style.backgroundColor = "red";
    }else if(y >=7 && y<9){
        text = "Hoc sinh kha!"
        document.getElementById("bg").style.backgroundColor = "yellow";
    }else if(y >=5 && y<7){
        text = "Hoc sinh trung binh!"
        document.getElementById("bg").style.backgroundColor = "blue";
    }else{
        text = "Em nen nghi hoc!"
        document.getElementById("bg").style.backgroundColor = "orange";
    }
    document.getElementById("grade").innerHTML = text;
}

function myFunction2(){
    document.getElementById("semester1").value = "";
    document.getElementById("semester2").value = "";
}