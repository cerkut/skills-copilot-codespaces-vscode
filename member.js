function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var home = document.getElementById("home");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    var homeContent = document.getElementById("homeContent");
    member.addEventListener("click", function () {
        memberContent.style.display = "block";
        skillsContent.style.display = "none";
        projectsContent.style.display = "none";
        contactContent.style.display = "none";
        aboutContent.style.display = "none";
        homeContent.style.display = "none";
    });
}      