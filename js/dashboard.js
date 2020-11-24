/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    ($(function () {
      $(
          "#loginForm input,#loginForm textarea,#loginForm button"
      ).jqBootstrapValidation({
          preventSubmit: true,
          submitError: function ($form, event, errors) {
              // additional error messages or events
          },
          submitSuccess: function ($form, event) {
              event.preventDefault(); // prevent default submit behaviour
              // get values from FORM

              var email = $("input#email").val();
              var password = $("input#password").val();// For Success/Failure Message
              // Check for white space in name for Success/Fail message
              $this = $("#sendMessageButton");
              $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
              var Alluser = localStorage.getItem("AllUsers");
              Alluser = JSON.parse(Alluser);
              console.log(Alluser);
              let validation = Alluser.find((user)=>{
                if(user.email == email && user.password == password){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }
            });

            console.log(validation);
              if(!validation){
                // Fail message
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-danger").append(
                    $("<strong>").text(
                        "Invalid data"
                    )
                );
                $("#success > .alert-danger").append("</div>");
                //clear all fields
                $("#loginForm").trigger("reset");
              }else{

                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-success").append(
                    "<strong>Success Login</strong>"
                );
                $("#success > .alert-success").append("</div>");
                //clear all fields
                $("#loginForm").trigger("reset");
                localStorage.setItem('currentUser', JSON.stringify(validation));
                window.location = "../screen/dashboard.html";
              }
              
          },
          filter: function () {
              return $(this).is(":visible");
          },
      });

      $('a[data-toggle="tab"]').click(function (e) {
          e.preventDefault();
          $(this).tab("show");
      });
  })); // End of use strict
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
    if(usercounter > 5){
        break;
    }
    console.log(allCategories[i].userID, currentUser.userId);
    if(allCategories[i].userID == currentUser.userId){
        result += "<tr>";
        result += "<td>"+allCategories[i].catID+"</td>";
        result += "<td>"+allCategories[i].categories+"</td>";
        result += "</tr>";
        usercounter++;
    }    
}
result += "</tbody>";
document.getElementById("allcategories").innerHTML += result;
});
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
    if(usercounter > 5){
        break;
    }
    if(allExpenses[i].userID == currentUser.userId){
        result += "<tr>";
        result += "<tr>";
        result += "<td>"+allExpenses[i].catID+"</td>";
        result += "<td>"+allExpenses[i].description+"</td>";
        result += "<td>"+allExpenses[i].amount+"</td>";
        result += "</tr>";
        usercounter++;
    }    
}
result += "</tbody>";
document.getElementById("allexpense").innerHTML += result;
});
