//function containing Article --------------------------

function Article(about, portfolio, additions_t_sk, projects, contact)
{
    this.about = about;
    this.portfolio = portfolio;
    this.additions_t_sk = additions_t_sk;
    this.projects = projects;
    this.contact = contact;

    that = this;
    this.flag_about = false;
    this.flag_portfolio = false;
    this.flag_programs = false;
    this.flag_projects = false;
    this.flag_contact = false;
}

Article.prototype.actuallPosition = function()
{
    var position = $(window).scrollTop(); 


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if((scroll > 550) && (scroll < 1090)) 
        {
           if (that.flag_about == false)
           {
             that.createAbout();
           }
        } 
        else if ((scroll > 1090) && (scroll < 1521))
        {
             if (that.flag_portfolio == false)
             {
                that.createPortfolio();
             }
        }
        else if (scroll > 1520 && scroll < 2000)
        {
            if (that.flag_programs == false)
            {
                that.createPrograms();
            }
        }
        else if (scroll > 2000 && scroll < 2920)
        {
            if (that.flag_projects == false)
            {
                that.createProjects();
            }
        }

        else if (scroll > 2920)
        {
            if (that.flag_contact == false)
            {
                that.createContact();
            }
        }

        position = scroll;
    });
}


Article.prototype.createAbout = function()
{
    //Create header containing text ABOUT
    var header = document.createElement("header");
    header.innerHTML = '<h1>ABOUT</h1>';

    var clr = this.about.firstElementChild;

    this.about.insertBefore(header, clr);

    var a_photo = document.createElement("div");
    a_photo.id = "a_photo";

    this.about.insertBefore(a_photo, clr);

    var a_me_info = document.createElement("div");
    a_me_info.id = "a_me_info";
    a_me_info.innerHTML = '<p>My name is Przemysław Drzewicz. I graduated engineering studies at the University of Technology in field of Electronic and Telecommunication on  Microsystem Electronics and Photonics department. My purpose is gaining knowledge in terms of front end programming. </p>';

    this.about.insertBefore(a_me_info, clr);

    $(header).hide().show(1500);
    $(a_photo).hide().delay(1000).show(1000);
    $(a_me_info).hide().delay(500).slideDown(2000);

    that.flag_about = true;
}


Article.prototype.createPortfolio = function()
{
//Create header
var header = document.createElement("header");
header.innerHTML = '<h1>SKILLS</h1>';

var first_tile = this.portfolio.firstElementChild;
var second_tile = this.portfolio.children[1];

this.portfolio.insertBefore(header, first_tile);

//Create skills container

var outer_bar1 = [];
var outer_bar2 = [];

var t1 = ["45%", "40%" ,"40%", "25%"];
var t2 = ["30%", "35%" ,"40%", "44%"];

var t_name_skill1 =["HTML", "CSS" ,"JAVASCRIPT/REACT", "PHP"];
var t_name_skill2 =["C", "C++" ,"C#", "SQL"];

var inner_bar1 = [];
var inner_bar2 = [];


for(var i = 0;i<4;i++)
{
    //Create outer-bar1
    outer_bar1[i] = document.createElement("div");
    outer_bar1[i].className = "outer-bar";

    first_tile.appendChild(outer_bar1[i]);

    //Create inner-bar1
    inner_bar1[i] = document.createElement("div");
    inner_bar1[i].className = "inner-bar";
    inner_bar1[i].style.width = t1[i];
    inner_bar1[i].innerHTML = t_name_skill1[i];

    outer_bar1[i].appendChild(inner_bar1[i]);


    outer_bar2[i] = document.createElement("div");
    outer_bar2[i].className = "outer-bar";

    second_tile.appendChild(outer_bar2[i]);    

    inner_bar2[i] = document.createElement("div");
    inner_bar2[i].className = "inner-bar";
    inner_bar2[i].style.width = t2[i];
    inner_bar2[i].innerHTML = t_name_skill2[i];

    outer_bar2[i].appendChild(inner_bar2[i]);

    $(outer_bar1[i]).hide();
    $(outer_bar2[i]).hide();
    $(inner_bar1[i]).hide();
    $(inner_bar2[i]).hide();
}

$(header).hide();
$(header).show(1500);


for (var i=0;i<4;i++)
{
    $(outer_bar1[i]).delay(600).show(1500);
    $(outer_bar2[i]).delay(600).show(1500);

    $(inner_bar1[i]).delay(2050).show(1700);
    $(inner_bar2[i]).delay(2050).show(1700);
}

that.flag_portfolio = true;
}

//Programs which i know
Article.prototype.createPrograms = function()
{
var h2 = document.createElement("h2");
h2.innerHTML = 'I KNOW THIS PROGRAMS';

this.additions_t_sk.appendChild(h2);
var clear_div = document.createElement("div");
$(clear_div).css("clear: both");
this.additions_t_sk.appendChild(clear_div);

var programs_tile_div = [];
var t = ["visual_code.png", "visual_studio.png", "and_studio.png", "qt-creator.jpg", "eclipse.png"];
var podpowiedz = ["Visual Studio Code", "Visual Studio", "Android Studio", "Qt Creator", "Eclipse"];


$(h2).hide();
$(h2).slideDown(1000);

var del = 700;

for(var i = 0; i<5; i++)
{
    programs_tile_div[i] = document.createElement("div");
    programs_tile_div[i].className ="programs-tile-div";
    programs_tile_div[i].innerHTML = '<img src="img/'+t[i]+'" width="150" height="150">';
    programs_tile_div[i].title = podpowiedz[i];

    this.additions_t_sk.appendChild(programs_tile_div[i]);
    $(programs_tile_div[i]).hide();

    $(programs_tile_div[i]).delay(del).show(1000);
    del = del + 500;
}

that.flag_programs = true;
}

//Projects -------------------------------------------------

Article.prototype.createProjects = function()
{
var header = document.createElement("header");
header.innerHTML = '<h1>PROJECTS</h1>';

this.projects.appendChild(header);

var figure = [];
var t = ["snakecsharp_projects", "robot_projects", "gamejs_projects", "nazwa1_projects", "nazwa2_projects", "snakecpp_projects"];

var t_name_project = ["<p>Snake game programmed in C#</p>", "<p>Robot remotely controlled by a mobile platform (C) and an application that controls the movement of the vehicle (C++, Qt framework)</p>", "<p>Portfolio programmed in Javascript</p>", "<p>CMS programmed in PHP (MVC model)</p>", "<p>Room booking system programmed in React JS</p>", "<p>Pacman game programmed in C++ <br>(Qt framework)</p>"];

var project_div = [];

var project_img = [];

var ahref = ["img/snakepic.png", "img/robot.png", "img/portfolio.png", "img/cms.png", "img/react.png", "img/snakegame.jpg"];

$(header).hide().show(1500);

var t_url = ["img/snakepic.png", "img/robot.png", "img/portfolio.png", "img/cms.png", "img/react.png", "img/pacman.png"];

var t_gitLinks = ["https://github.com/przemyslawdrzewicz/SnakeC-", "https://github.com/przemyslawdrzewicz/BluetoothCommunication", "https://github.com/przemyslawdrzewicz/Portfolio", "https://github.com/przemyslawdrzewicz/cms", "https://github.com/przemyslawdrzewicz/BookReact", "https://github.com/przemyslawdrzewicz/Pacman"];

var del = 1500;
for(var i =0;i<6;i++)
{
     figure[i] = document.createElement("figure");

     ahref[i] = document.createElement("a");
     ahref[i].href = t_gitLinks[i];
     ahref[i].target = "_blank";

     project_div[i] = document.createElement("div");
     project_div[i].id = t[i];
     project_div[i].innerHTML = t_name_project[i];

     this.projects.appendChild(figure[i]);

     figure[i].appendChild(ahref[i]);

     ahref[i].appendChild(project_div[i]);

    project_img[i] = document.createElement("img");
    project_img[i].src = t_url[i];
    project_div[i].appendChild(project_img[i]);

     $(figure[i]).hide().delay(del).show(1500);

     del = del + 1500;
    that.flag_projects = true;
}
}

//Contact ...................................................

Article.prototype.createContact = function()
{
var header = document.createElement("header");
header.innerHTML = '<h1>CONTACT</h1>';

this.contact.appendChild(header);
$(header).hide();

var form = document.createElement("form");
form.id = "form";
form.action = "send.html";
form.method = "get";
//form.action = "#";
this.contact.appendChild(form);

var input_name = document.createElement("input");
var input_email = document.createElement("input");
var textarea = document.createElement("textarea");
var input_submit = document.createElement("input");

var input_name_error = document.createElement("p");
var input_email_error = document.createElement("p");

input_name_error.id ="input_name_error";
input_email_error.id = "input_email_error";

input_name.type = "text";
input_name.name ="name";
input_name.placeholder = "First name";
input_name.id = "input_name";

input_email.type = "text";
input_email.name ="email";
input_email.placeholder = "Enter e-mail";
input_email.id = "input_email";

textarea.name ="message";
textarea.placeholder = "Your message";

input_submit.setAttribute("type", "submit");
input_submit.setAttribute("value", "SUBMIT");
input_submit.id = "send";


form.appendChild(input_name_error);

form.appendChild(input_name);

form.appendChild(input_email_error);

form.appendChild(input_email);
form.appendChild(textarea);
form.appendChild(input_submit);

$(header).show(1500);
$(input_name).hide().slideDown(700);
$(input_email).hide().slideDown(700);
$(textarea).hide().slideDown(700);
$(input_submit).hide().slideDown(700);

that.flag_contact = true;

//Validate contact data

    document.getElementById("form").onsubmit = function()
    {
        var e = document.getElementById("input_email").value;
        var n = document.getElementById("input_name").value;
    
        var flag_e = false;
        var flag_n = false;
    
        if (n == "")
        {
            $("#input_name_error").addClass("input_error");
            $("#input_name_error").text("Invalid name");
            $("#input_name_error").css("display", "block");
            flag_n = false;
        }
        else
        {
            $("#input_name_error").removeClass("input_error");
            $("#input_name_error").text("");
            $("#input_name_error").css("display", "none");
            flag_n = true;
        }
    
    
            var m = /@/;
            var end1 = /.pl/
            //var end2 = /.com/
            var r_m = m.test(e);
            var r_end1 = end1.test(e);
            //var r_end2 = end2.test(e);
    
            if ( (r_m == true) && (r_end1 == true) )
            {
                $("#input_email_error").removeClass("input_error");
                $("#input_email_error").text("");
                $("#input_email_error").css("display", "none");
                flag_e = true;
            }
            else
            {
                $("#input_email_error").addClass("input_error");
                $("#input_email_error").text("Invalid e-mail adress");
                $("#input_email_error").css("display", "block");
                flag_e = false;
            }
    
            if ( (flag_e == true) && (flag_n == true) )
            {
                return true;
            }
            else
            {
                return false;
            }
    }
}





