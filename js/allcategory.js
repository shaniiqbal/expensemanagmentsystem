
$( document ).ready(function() {
    var allCategories = localStorage.getItem("allCategories");
    allCategories = JSON.parse(allCategories);
    var currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);
    console.log(allCategories);
    var usercounter = 0;
    var result = "";
    result += "<tbody>";
for(var i=0; i<allCategories.length; i++) {
    console.log(allCategories[i].userID, currentUser.userId);
    if(allCategories[i].userID == currentUser.userId){
        result += "<tr>";
        result += "<td>"+allCategories[i].catID+"</td>";
        result += "<td>"+allCategories[i].categories+"</td>";
        result += "<td>"+allCategories[i].catDate+"</td>";
        result += '<td><span class="glyphicon glyphicon-envelope"></span> </td>';
        result += "</tr>";
        usercounter++;
    }    
}
result += "</tbody>";
document.getElementById("allcategories").innerHTML += result;
});
