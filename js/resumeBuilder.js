bio = {
	"name" : "Johnathon Stevens",
	"role" : "Javascript Ninja",
	"contacts" : {
		"mobile" : "563-289-7897",
		"email" : "JohnathonWStevens@gmail.com",
		"github" : "Tasoril",
		"linkedin" : "https://linkedin.com/in/johnathonstevens",
		"location" : "Dubuque, Iowa"
	},
	"welcomeMessage" : "Hello and welcome to awesome.",
	"skills" : ["Programming", "HTML", "PHP", "Javascript", "MySQL"],
	"biopic" : "images/me.jpg"
};
// Write Header Information
bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLcontactGeneric.replace("%data%",bio.contacts.linkedin).replace("%contact%","linkedin"));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var skill = 0; skill < bio.skills.length; skill++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
	// End Write Header Information
	//$("#footerContacts").append($("#topContacts"));
}



work = [
	{
		"employer" : "IBM Corporation",
		"title" : "Automation Specialist",
		"location" : "Dubuque, IA, US",
		"dates" : "11/2013 - 09/2014",
		"description" : [
			"Primary duties in this role included updating and maintaining scripts which are used by a team of IT specialists to support a Windows Server environment of 12,000+ Windows 2000-2008 R2 servers.",
			"Ability and aptitude to efficiently write a web based script to health check servers which saved the team over 120 hours weekly of manual work, in addition to a logging script for government compliance that saved 40 hours of data sifting, prevented data loss, and minimized audit issues.",
			"Developed and implemented a vacation planner to replace an older outdated manual method, which saved management hundreds of hours of manual work per month.",
			"Responsible for updating and adding features to existing automation tools written in VBScript, HTML, JavaScript, PHP, and MySQL."
		]
	},
	{
		"employer" : "IBM Corporation",
		"title" : "Technical Support Speicalist - Jazz (Tier 3)",
		"location" : "Dubuque, IA, US",
		"dates": "09/2011 - 10/2013",
		"description" : [
			"Primary duties in this role consisted of providing support for 12,000+ Windows based servers including hardware and OS troubleshooting functions, as well as 2,000+ VMware servers.",
			"Provided programming and automation support in order to ease status and health checking of servers for speedy resolution of critical outages.", "Tasked with responding to support requests for both major and minor outages of Windows servers or VMs.", "Responsible for the updating and maintaining scripts and programs used to automate common tasks executed by the team.", "Role as management contact for the second shift of employees accountable for Windows based and VMware server support.",
			"Received highest possible yearly review ratings for each year in this position.",
			"Successfully saved the team over 1,000 hours per year of manual work through automation.",
			"Pushed and scheduled patches using BigFix/TEM and SCCM. Monitoring and error reporting using SCCM."
		]
	},
	{
		"employer" : "IBM Corporation",
		"title" : "Technical Support Speicalist - Dispatcher",
		"location" : "Dubuque, IA, US",
		"dates": "03/2011 - 09/2011",
		"description" : [
			"Primary duties in this role consisted of efficiently dispatching tickets for an enterprise client of 12,000+ Windows based servers and virtual machines.",
			"Direct communication with customers to identify and troubleshoot specific issues, then determine the appropriate course to correct the issue.",
			"Ability to multitask while completing and dispatching tickets to a dedicated team of Systems Administrators.",
			"Responsible for initial triage work and reassignment of incorrectly assigned tickets to be expedited."
		]
	}
];
work.display = function() {
	// Write Work Information
	for(var job = 0; job < work.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		var thisJob = work[job];
		var formattedEmployer = HTMLworkEmployer.replace("%data%", thisJob.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", thisJob.title);
		var formattedDates = HTMLworkDates.replace("%data%", thisJob.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", thisJob.location);
		var thisDesc = "<ul class='job-description'>";
		for(var descItem = 0; descItem < thisJob.description.length; descItem++) {
			thisDesc = thisDesc+"<li> - "+thisJob.description[descItem]+"</li>";
		}
		var thisDesc = thisDesc+"</ul>";
		var formattedDescription = HTMLworkDescription.replace("%data%", thisDesc);
		$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);
	}
	// End Write Work Information
}



projects = [
	{
		"title" : "Jet: Price After Discount",
		"dates" : "2015",
		"description" : ["A TamperMonkey script written to show the user the final price for a product without having to calculate it in their head."],
		"images" : ["images/jetpad-image.png"]
	}
];
projects.display = function() {
	// Write Project Information
	for(var project = 0; project < projects.length; project++) {
		$("#projects").append(HTMLprojectStart);
		var thisProject = projects[project];
		var formattedTitle = HTMLprojectTitle.replace("%data%", thisProject.title);
		var formattedDates = HTMLprojectDates.replace("%data%", thisProject.dates);
		// Description
		var thisDesc = "<ul class='project-description'>";
		for(var descItem = 0; descItem < thisProject.description.length; descItem++) {
			thisDesc = thisDesc+"<li> - "+thisProject.description[descItem]+"</li>";
		}
		var thisDesc = thisDesc+"</ul>";
		var formattedDescription = HTMLprojectDescription.replace("%data%", thisDesc);
		// Images
		var formattedImages = "";
		for(var imgItem = 0; imgItem < thisProject.images.length; imgItem++) {
			formattedImages = formattedImages+HTMLprojectImage.replace("%data%",thisProject.images[imgItem]);
		}
		$(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription+formattedImages);
	}
	// End Write Project Information
}



education = {
	"schools" : [
		{
			"name" : "Los Angeles Valley College",
			"location" : "Sylmar, CA, US",
			"degree" : "N/A",
			"majors" : ["Computer Science", "Business Administration"],
			"dates" : 2009,
			"url" : "http://lavc.edu/"
		},
		{
			"name" : "Options for Youth Charter Schools",
			"location" : "Burbank, CA, US",
			"degree" : "High School Diploma",
			"majors" : ["General Education"],
			"dates" : 2007,
			"url" : "https://ofy.org/"
		}
	],
	"onlineCourses": [
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};
education.display = function() {
	// Write Education SCHOOL Information
	for(var school = 0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);
		var thisSchool = education.schools[school];
		var formattedName = HTMLschoolName.replace("%data%",thisSchool.name).replace("#",thisSchool.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",thisSchool.degree);
		var formattedDates = HTMLschoolDates.replace("%data%",thisSchool.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",thisSchool.location);
		var majorList = "";
		for(var major = 0; major < thisSchool.majors.length; major++) {
			majorList = majorList+", "+thisSchool.majors[major];
		}
		majorList = majorList.substr(1);
		var formattedMajor = HTMLschoolMajor.replace("%data%",majorList);
		$(".education-entry:last").append(formattedName+formattedDegree+formattedDates+formattedLocation+formattedMajor);
	}
	// End Write Education SCHOOL Information

	// Write Education ONLINE Information
	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for(var course = 0; course < education.onlineCourses.length; course++) {
			$("#education").append(HTMLschoolStart);
			thisCourse = education.onlineCourses[course];
			var formattedTitle = HTMLonlineTitle.replace("%data%",thisCourse.title).replace("#",thisCourse.url);
			var formattedSchool = HTMLonlineSchool.replace("%data%",thisCourse.school);
			var formattedDate = HTMLonlineDates.replace("%data%",thisCourse.date);
			var formattedURL = HTMLonlineURL.replace("%data%",thisCourse.url);
			$(".education-entry:last").append(formattedTitle+formattedSchool+formattedDate+formattedURL);
		}
	}
	// End Write Education ONLINE Information
}



function drawMap() {
	$("#mapDiv").append(googleMap);
}



// Call all of our encapsulated functions (in any order) to render the resume.
bio.display();
work.display();
projects.display();
education.display();
drawMap();