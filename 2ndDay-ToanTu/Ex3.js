function myFunction(){
    var number = document.getElementById("nhap").value;
    var greeting;
    if (number == 0){
        document.getElementById("demo").innerHTML = "Khong am cung khong duong";
        document.getElementById("demo").style.color = "yelow";
    } else if (number > 0){
        document.getElementById("demo").innerHTML = "No la so duong";
        document.getElementById("demo").style.backgroundColor = "green";
    }else{
        document.getElementById("demo").innerHTML = "No la so am";
    }
}