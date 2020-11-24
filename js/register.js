/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    ($(function () {
      $(
          "#registerForm input,#registerForm textarea,#registerForm button"
      ).jqBootstrapValidation({
          preventSubmit: true,
          submitError: function ($form, event, errors) {
              // additional error messages or events
          },
          submitSuccess: function ($form, event) {
              event.preventDefault(); // prevent default submit behaviour
              // get values from FORM
              var userName = $("input#username").val();
              var email = $("input#email").val();
              var password = $("input#password").val();
              var repassword = $("input#repassword").val();
              if(repassword != password){
                return;
              }
              // Check for white space in name for Success/Fail message
              $this = $("#sendMessageButton");
              $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
              var Alluser = localStorage.getItem("AllUsers");
              var data={
                userName,
                email,
                password
              };
              
              if(!Alluser){
                  
                data.userId=Math.floor(Math.random(1)*100000);
                localStorage.setItem('AllUsers' , JSON.stringify([data]));
                $("#success").html("<div class='alert alert-success'>");
                      $("#success > .alert-success")
                          .html(
                              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                          )
                          .append("</button>");
                      $("#success > .alert-success").append(
                          "<strong>Success Register</strong>"
                      );
                      $("#success > .alert-success").append("</div>");
                      //clear all fields
                      $("#registerForm").trigger("reset");
              }else{
                userdata = localStorage.getItem("AllUsers");
                userdata = JSON.parse(userdata);
                console.log(userdata);
                data.userId=Math.floor(Math.random(1)*100000);
                userdata.push(data);
                localStorage.setItem('AllUsers' , JSON.stringify(userdata));
                $("#success").html("<div class='alert alert-success'>");
                      $("#success > .alert-success")
                          .html(
                              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                          )
                          .append("</button>");
                      $("#success > .alert-success").append(
                          "<strong>Success Register</strong>"
                      );
                      $("#success > .alert-success").append("</div>");
                      //clear all fields
                      $("#registerForm").trigger("reset");
              }
              /*$.ajax({
                  url: "../js/login.js",
                  type: "POST",
                  data: {
                      email: email,
                      password: password,
                  },
                  cache: false,
                  success: function () {
                      // Success message
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
                  },
                  error: function () {
                      // Fail message
                      $("#success").html("<div class='alert alert-danger'>");
                      $("#success > .alert-danger")
                          .html(
                              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                          )
                          .append("</button>");
                      $("#success > .alert-danger").append(
                          $("<strong>").text(
                              "Sorry server is not responding. Please try again later!"
                          )
                      );
                      $("#success > .alert-danger").append("</div>");
                      //clear all fields
                      $("#loginForm").trigger("reset");
                  },
                  complete: function () {
                      setTimeout(function () {
                          $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                      }, 1000);
                  },
              });*/
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
  