//function containing Navigation (Home,About ...) --------------------------

function Navigation(a_nav)
{
    this.a_nav = a_nav;
}

Navigation.prototype.createNav = function()
{
    //Create div containing navigation
    var nav_container = document.createElement("div");
   
    nav_container.id = "nav_container";

    var menu_ol = document.createElement("ol");
    menu_ol.id ="menu_ol";

    var nav_board = ["HOME", "ABOUT", "PORTFOLIO", "PROJECTS", "CONTACT"];

    this.a_nav.appendChild(nav_container);
    nav_container.appendChild(menu_ol);

    $(nav_container).hide();

    var main_select = [];

    for (var i=0; i<5; i++)
    {
        main_select[i] = document.createElement("li");
        main_select[i].innerHTML = '<a class="main_select" href="#">'+nav_board[i]+'</a>';
        menu_ol.appendChild(main_select[i]);
    }

    $(nav_container).delay(1000).show(2000);
}

t = ["logo_container", "about_article", "portfolio_article", "projects_article", "contact_article"];

Navigation.prototype.clickedNav = function()
{
    for (var i = 0; i<5; i++)
    {
        $(".main_select").eq(i).on('click', {id: i}, function(e) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#"+t[e.data.id]).offset().top
            }, 1000);
        });
    }    


    
}