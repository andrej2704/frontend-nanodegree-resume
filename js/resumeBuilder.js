
var bio = {
    "name": "John Doe",
    "role": "Web Ninja",
    "contacts": {
        "mobile": "123123123",
        "email": "ninja@gmail.com",
        "github": "ninja@github.com",
        "twitter": "@ninja",
        "location": "Prague"
    },
    "skills": ["awesomeness", "delivering things", "saving the universe"],
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "Hi there!"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace('%data%', name);

var role = bio.role;
var formatterRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formatterRole);
$('#header').prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if (bio.skills.length > 0)
{
    var formattedSkills;
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
    }
}
var education = {
    "schools": [
    {
        "name": "Nova Southeastern University",
        "city": "Fort Lauderate, FL",
        "degree": "Master",
        "majors":["CS"],
        "dates": "2008",
        "url": "google.com"
    }
    ],
    "onlineCourses": [
    {
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": 2014,
        "url": "http://www.udacity.com/course/ud804"
    }
    ]
};

var work = {
    "jobs": [
    {
        "employer": "Terrasoft",
        "title": "Support Engiiner",
        "dates": "2010",
        "description": "Lorem ipsum dolors"
    },
    {
        "employer": "GlobalLogic",
        "title": "SW Test Enginner",
        "dates": "2010-2012",
        "description": "Lorem ipsum dolors"
    },
    {
        "employer": "Ciklum",
        "title": "Sw Test Enginneer",
        "dates": "2012",
        "description": "Lorem ipsum dolors"
    }
    ]
};
function displayWork()
{
    for (job in work.jobs)
    {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formatedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $(".work-entry:last").append(formatedDescription);
    }
}

function inName(name)
{
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//$("#main").append(internationalizeButton);

displayWork();

var projects = {
    "projects": [
    {
        "title": "CRM, XRM",
        "dates": "2010",
        "description": "Loresm ipsum dolors"
    },
    {
        "title": "Wireless Networking",
        "dates": "2010-2012",
        "description": "Loresm ipsum dolors"
    },
    {
        "title": "xt:commerce plugin for statistic",
        "dates": "2012",
        "description": "Loresm ipsum dolors"
    }
    ]
};
projects.display = function()
    {
        for (project in projects.projects)
        {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title)
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates)
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description)
            $(".project-entry:last").append(formattedDescription);
        }

    }

projects.display();

$("#mapDiv").append(googleMap);