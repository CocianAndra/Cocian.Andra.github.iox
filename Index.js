function hide (id){
    document.getElementById(id).style.display = "none";
}

function showhomepage() {
    hide ("skills");
    hide("projects");
    hide ("Languages");
    document.getElementById("Home").style.display = "block";

}
function showskillsPage() {
    hide("Home");
    hide("projects");
    hide("Languages");
    document.getElementById("skills").style.display = "block";

}

function showprojectPage() {
    hide("Home");
    hide("skills");
    hide("Languages");
    document.getElementById("projects").style.display = "block";

}

function showlanguagePage() {
    hide("Home");
    hide("skills");
    hide("projects");
    document.getElementById("Languages").style.display = "block";

}

showhomepage();

var HomeLink = document.querySelectorAll("#top-menu-bar a")[0];
HomeLink.addEventListener("click",showhomepage)

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showskillsPage);

var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
projectsLink.addEventListener("click", showprojectPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
languagesLink.addEventListener("click", showlanguagePage);