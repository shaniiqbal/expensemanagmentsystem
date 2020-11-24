/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    ($(function () {
      $(
          "#categoryForm input,#categoryForm textarea,#categoryForm button"
      ).jqBootstrapValidation({
          preventSubmit: true,
          submitError: function ($form, event, errors) {
              // additional error messages or events
          },
          submitSuccess: function ($form, event) {
              event.preventDefault(); // prevent default submit behaviour
              // get values from FORM

              var categories = $("input#categories").val();
              data={
                categories,
                catDate: new Date().toLocaleString(),
              };
              // Check for white space in name for Success/Fail message
              $this = $("#sendMessageButton");
              var allCategories = localStorage.getItem("allCategories");
              var currentUser = localStorage.getItem("currentUser");
              currentUser = JSON.parse(currentUser);
              allCategories = JSON.parse(allCategories);
              if(!allCategories){
                data.catID=Math.floor(Math.random(1)*100000);
                data.userID=currentUser.userId;
                localStorage.setItem('allCategories' , JSON.stringify([data]));
                $("#success").html("<div class='alert alert-success'>");
                      $("#success > .alert-success")
                          .html(
                              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                          )
                          .append("</button>");
                      $("#success > .alert-success").append(
                          "<strong>Success</strong>"
                      );
                      $("#success > .alert-success").append("</div>");
                      //clear all fields
                      $("#registerForm").trigger("reset");
              }else{
                userdata = localStorage.getItem("allCategories");
                userdata = JSON.parse(userdata);
                console.log(userdata);
                data.catID=Math.floor(Math.random(1)*100000);
                data.userID=currentUser.userId;
                userdata.push(data);
                localStorage.setItem('allCategories' , JSON.stringify(userdata));
                $("#success").html("<div class='alert alert-success'>");
                      $("#success > .alert-success")
                          .html(
                              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                          )
                          .append("</button>");
                      $("#success > .alert-success").append(
                          "<strong>Success</strong>"
                      );
                      $("#success > .alert-success").append("</div>");
                      //clear all fields
                      $("#registerForm").trigger("reset");
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
  