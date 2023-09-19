function showhomepage() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("Languages").style.display = "none";
    document.getElementById("Home").style.display = "block";
}

function showskillsPage() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("Languages").style.display = "none";
    document.getElementById("skills").style.display = "block";

}

function showprojectPage() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("Languages").style.display = "none";
    document.getElementById("projects").style.display = "block";

}

function showlanguagePage() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
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