for (var i = 1; i <5; i++){
    for (var j = 1; j <10; j++){
        document.write("<div class='square'> </div>");
    } 
    document.write("<div class='square' style='clear:both'> </div>")
}

var mobile = ["Nokia", "Iphone", "Samsung", "V-Smart"]
for (var i = 0; i < mobile.length; i++){
    document.write(mobile[i] + "<br>");
}

var Sinhvien = [
    {
        name : "TH",
        year : 2024,
        gender : "Female",
        homeTown : "Kon Tum"
    },
    {
        name : "TH1",
        year : 2025,
        gender : "Female",
        homeTown : "Kon Tum"
    },
    {
        name : "TH2",
        year : 2026,
        gender : "Female",
        homeTown : "Kon Tum"
    }
]
for (n in Sinhvien){
    document.write(Sinhvien[n].name);
    document.write("<hr>");
    document.write(Sinhvien[n].year);
    document.write("<hr>");
    document.write(Sinhvien[n].gender);
    document.write("<hr>");
    document.write(Sinhvien[n].homeTown);
    document.write("<hr>");
}


function doWhileLoop(){
    var sum = 0;
    var number  = document.getElementsById("number").value;
    var i = 1;
    do {
        sum += i;
        i++;
    } while (i<= number)
    document.getElementById("demo").innerHTML = sum;
}