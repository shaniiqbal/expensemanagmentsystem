
$( document ).ready(function() {
    var allExpenses = localStorage.getItem("allExpenses");
    allExpenses = JSON.parse(allExpenses);
    var currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);
    console.log(allExpenses);
    var usercounter = 0;
    var result = "";
    result += "<tbody>";
for(var i=0; i<allExpenses.length; i++) {
    console.log(allExpenses[i].userID, currentUser.userId);
    if(allExpenses[i].userID == currentUser.userId){
        result += "<tr>";
        result += "<tr>";
        result += "<td>"+allExpenses[i].catID+"</td>";
        result += "<td>"+allExpenses[i].categories+"</td>";
        result += "<td>"+allExpenses[i].amount+"</td>";
        result += "<td>"+allExpenses[i].categories+"</td>";
        result += "<td>"+allExpenses[i].catDate+"</td>";
        result += '<td><span class="glyphicon glyphicon-envelope"></span> </td>';
        result += "</tr>";
        usercounter++;
    }    
}
result += "</tbody>";
document.getElementById("allExpenses").innerHTML += result;
});
