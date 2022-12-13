function ok(){

    let fname = frm.fname.value;
    let lname = frm.lname.value;
    let sc = frm.sc.value;
    no++;

    let row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + fname + " " + lname + "</td>";
    row += "<td>" + sc + "</td>";
    if (sc >= 70){
        row += "<td>" + "Pass" + "</td>";
        row += "<td>" + "Fair" + "</td>";
    }else if (sc >= 80){
        row += "<td>" + "Pass" + "</td>";
        row += "<td>" + "Good" + "</td>";
    }else if (sc >= 90){
        row += "<td>" + "Pass" + "</td>";
        row += "<td>" + "Very good" + "</td>";
    }else{
        row += "<td>" + "Miss" + "</td>";
        row += "<td>" + "Bad" + "</td>";
    }
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
}