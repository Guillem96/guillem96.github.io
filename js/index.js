$(document).ready(function () {
  setTimeout(function () {
    $(".loading").fadeOut("slow", function () {
      $(".guillem-info").fadeIn("slow");
    });
  }, 1000);
});