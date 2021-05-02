$(document).ready(function() {
  $("#jqButtonOne").click(function() {
       $('html, body').animate({
           scrollTop: $("#mySkills").offset().top
       }, 1500);
   });
  });

  $(document).ready(function() {
    $("#jqButtonTwo").click(function() {
         $('html, body').animate({
             scrollTop: $("#myWork").offset().top
         }, 1500);
     });
    });