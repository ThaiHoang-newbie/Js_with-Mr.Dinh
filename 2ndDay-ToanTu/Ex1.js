function Scn(){
    var a = parseFloat(prompt("Width: "));
    var b = parseFloat(prompt("Height: "));
    return alert(a*b);
}
function enjoy(){
    alert("Welcome to my game!")
    if (confirm("Do you want to play?")){
        var n = prompt("Enter name: ")
        alert(n + " enjoy the game")
    }
}

function birthday(){
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = new Date(prompt("Input your birthday: "))
    var day = weekday[d.getDay()];
    var year = d.getFullYear()
    var date = d.getDate()
    var month = d.getMonth() + 1
    alert("Sinh vao thu: " + day)
    alert("Sinh vao ngay: " + date)
    alert("Sinh vao thang: " + month)
    alert("Sinh vao nam: " + year)
    var currentDate = new getFullYear()
    alert("Tuoi: " + (currentDate - year))
}

function condition(){
    var a = parseInt(prompt("Number: "));
    if (a>0){
        alert("A la so duong")
    }else if(a<0){
        alert("A la so am")
    }else{
        alert("A khong phai la so duong cung khong phai la so am")
    }
}

function sum(){
    var a = document.parseInt(getElementById("fname").value)
    var b = document.parseInt(getElementById("fusername").value)
    document.getElementById("demo").innerHTML = a+b;
}
