(function(){

//Main file containing objects ---------------------------------------------

$("#logo_container").hide().show(2000);

var nav_obj = new Navigation(document.querySelector("nav"));
nav_obj.createNav();

var art_obj = new Article(document.querySelector("#about_article"), document.querySelector("#portfolio_article"), document.querySelector("#additions_tile_skills"), document.querySelector("#projects_article"), document.querySelector("#contact_article"));

nav_obj.clickedNav();
art_obj.actuallPosition();
})();


