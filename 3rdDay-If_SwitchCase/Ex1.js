function myFunction(){
    var text;
    var favDrink = prompt("What's your favorite cocktail drink?","Daiquiri")
    switch (favDrink){
        case "Martini":
            text = "Excellent choice. Martini is good your soul";
            break;
        case "Coffee":
            text = "Coffee is my favorite too!";
            break;
        case "Cosmopolitan":
            text = "RealLy? Are you sure the Cosmopolitan is your favorite?!";
            break;
        default:
            text ="I have never heard of that one...";
            break;
    }   
    document.getElementById("demo").innerHTML = text
}