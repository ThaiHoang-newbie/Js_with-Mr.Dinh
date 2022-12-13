var id=0;
function sell(){
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var dc = frm.dc.value;
    var price = frm.up.value;
    var sub = price*qty - qty*dc;
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + dc + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
}


