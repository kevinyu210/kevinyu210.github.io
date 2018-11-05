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

var resumeHeader = document.querySelector(".resume");
var sideNavResume = document.querySelector(".side-nav-resume");
sideNavResume.addEventListener("click", function() {
	resumeHeader.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
})