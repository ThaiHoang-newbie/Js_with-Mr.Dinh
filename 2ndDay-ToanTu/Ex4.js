function myFunction(name, score1){
    var score2;
    if (score1 => 0 && score1 <= 100){
        if(score1 >= 90){
            score2 = "Exelence"
        } else if(score1 >= 80){
            score2 = "Very good"
        }else if(score1 >= 70){
            score2 = "Very good"
        }else if(score1 >= 60){
            score2 = "Fair"
        }else if(score1 >= 50){
            score2 = "Medium"
        }else{
            score2 = "Fail"
        }
    }else{
        score2 = "Score must be between 0 and 100"
    }
    document.getElementById("Define_grade").innerHTML = name + "'s grade is "+ score2;
}