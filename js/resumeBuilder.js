var awesomeThoughts = "I'm super awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun")
var formattedName = HTMLheaderName.replace("%data%", "Andrii");
var formattedRole = HTMLheaderRole.replace("%data%", "Ninja");
var bio = {
    "name": "Andrii",
    "role": "Ninja",
    "contact": "ninja@gmail.com",
    "pictureUrl": "www.google.com",
    "welcomeMessage": "Hi there!"
}

var work = {};
work.position = "Ninja";
work.employer = "FBI";
work.years = 100;

$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
$("#main").append(bio.contact);
$("#main").append(bio.pictureUrl);
$("#main").append(work["position"]);
