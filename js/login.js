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
  