function skillsMember()
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var project = document.getElementById("project");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectContent = document.getElementById("projectContent");
    var contactContent = document.getElementById("contactContent");
    member.style.backgroundColor = "#333";
    member.style.color = "#fff";
    skills.style.backgroundColor = "#fff";
    skills.style.color = "#333";
    project.style.backgroundColor = "#fff";
    project.style.color = "#333";
    contact.style.backgroundColor = "#fff";
    contact.style.color = "#333";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectContent.style.display = "none";
    contactContent.style.display = "none";
}