// Starts off minimized? 
// document.querySelector(".side-nav-items div").style.width = "50px"
// Declare element variables
var sideNav = document.getElementById("side-nav");
var sideNavItemsDivs = document.querySelector(".side-nav-items div");
var mainContainer = document.getElementById("main-container");
var expandButton = document.querySelector(".expand-button");
var navItems = document.querySelectorAll(".side-nav-item");

var minimizedNavWidth = "50px";
var expandedNavWidth = "200px";

var seeMoreSection = document.querySelectorAll(".see_more div");
console.log(seeMoreSection.length + "total");
var seeMoreLinks = document.querySelectorAll(".see_more a")

for (var i = 0; i< seeMoreLinks.length; i++) {
	var section = seeMoreSection[i];
	console.log(i);
	console.log(section);
	seeMoreLinks[i].addEventListener("click", function() {
		// console.log(section);
		if (this.innerHTML == "See Less") {
			// Minimize it
			this.innerHTML = "See More";
			section.style.display = "none";
		}
		else {
			// Maximize it

			this.innerHTML = "See Less";
			section.style.display = "block";
		}
	})
}




function openNav() {
	sideNav.style.width = expandedNavWidth;
	sideNavItemsDivs.style.width = expandedNavWidth;
	mainContainer.style.opacity = "0.4";
	expandButton.style.textAlign = "right";
	for(var i =0; i<navItems.length;i++){
		navItems[i].style.visibility = "visible";
	}
}

function closeNav() {
	sideNav.style.width = minimizedNavWidth;
	sideNavItemsDivs.style.width = minimizedNavWidth;
	mainContainer.style.opacity = "1.0";
	expandButton.style.textAlign = "center";
	for(var i =0; i<navItems.length;i++){
		navItems[i].style.visibility = "hidden";
	}
}

expandButton.addEventListener("click", function() {
	if (sideNav.style.width == expandedNavWidth) {
		closeNav();
	}
	else {
		openNav();
	}
})
mainContainer.addEventListener("click", closeNav);

// Side-Nav Navigation:
var sideNavBio = document.querySelector(".side-nav-bio");
sideNavBio.addEventListener("click", function() {
	document.body.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
})

//slide to the resume section?
var educationSection = document.querySelector(".education-section");
var sideNavEducation = document.querySelector(".side-nav-education");
sideNavEducation.addEventListener("click", function() {
	educationSection.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
})

//slide to the work experience section?
var workExperienceSection = document.querySelector(".work-experience-section");
var sideNavWorkExperience = document.querySelector(".side-nav-work-experience");
sideNavWorkExperience.addEventListener("click", function() {
	workExperienceSection.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
})

//slide to project section
var projectsSection = document.querySelector(".projects-section");
var sideNavProjects = document.querySelector(".side-nav-projects");
sideNavProjects.addEventListener("click", function() {
	projectsSection.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
})

// Python stuff
