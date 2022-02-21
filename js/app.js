const startingTime = performance.now();
///* creating Navigation Menu *///
const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list");

/* sticky header function */
let FexiedHeader = document.querySelector(".FexiedHeader");
//* show scroll to top *//
const ToTop = document.querySelector("#ToTop");
//* building phone navigation *//
const NavButton = document.querySelector("#NavButton");
const phoneNav = document.querySelector("#phoneNav");
let wiat;

let FirstOne = true;
let NavContent = "";
for (const section of sections) {
  if (FirstOne == true) {
    NavContent =
      NavContent +
      `<li class="active ${section.id}"><a data-anchor="header">${section.id}</a></li>`;
    FirstOne = false;
  } else {
    NavContent =
      NavContent +
      `<li class="${section.id}"><a data-anchor="${section.id}">${section.id}</a></li>`;
  }
}
nav.insertAdjacentHTML("beforeend", NavContent);

document.onscroll = function () {
  scrollFunction();
  displaytopbutton();
  HighlightNav();
};
//* Highlight Nav Menu on scroll  *//
const NavItems = document.querySelectorAll("#navbar__list li");
//* Highlight Nav Menu on scroll  *//
function HighlightNav() {
  let activeSection = "";
  for (section of sections) {
    const sectionTop = section.offsetTop;
    if (pageYOffset > sectionTop - 110) {
      activeSection = section.id;
    }
  }
  for (NavItem of NavItems) {
    NavItem.classList.remove("active");
    if (NavItem.classList == activeSection) {
      NavItem.classList.add("active");
    }
  }
  for (section of sections) {
    section.classList.remove("ActiveSection");
    if (section.id == activeSection) {
      section.classList.add("ActiveSection");
    }
  }
}

/* sticky header function */
function scrollFunction() {
  FexiedHeader.classList.remove("hide");
  if (pageYOffset == 0) {
    FexiedHeader.classList.remove("sticky");
  }
  if (pageYOffset > 0) {
    FexiedHeader.classList.add("sticky");
  } else if (pageYOffset > 0) {
    FexiedHeader.classList.add("sticky");
  }
  clearTimeout(wiat);
  wiat = setTimeout(function () {
    FexiedHeader.classList.add("hide");
  }, 6000);
}
//* show scroll to top *//
function displaytopbutton() {
  if (window.innerWidth > 600) {
    if (pageYOffset > 250) {
      ToTop.setAttribute("style", "display:block");
    } else {
      ToTop.setAttribute("style", "display:none");
    }
  } else {
    ToTop.setAttribute("style", "display:none");
  }
}
//* building phone navigation *//
phoneNav.insertAdjacentHTML("afterbegin", `<ul>${NavContent}</ul>`);
/* navigation functions */
NavButton.addEventListener("click", function () {
  if (phoneNav.style.display === "block") {
    phoneNav.style.display = "none";
  } else {
    phoneNav.style.display = "block";
  }
});
phoneNav.addEventListener("click", function () {
  phoneNav.style.display = "none";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    phoneNav.style.display = "none";
  }
});

//*smooth scroll *//
let Alinks = document.querySelectorAll("a");
let targets = document.querySelectorAll("[id]");
for (let i = 0; i < Alinks.length; i++) {
  for (let x = 0; x < targets.length; x++) {
    if (Alinks[i].dataset.anchor == targets[x].id) {
      Alinks[i].addEventListener("click", function () {
        targets[x].scrollIntoView({ behavior: "smooth" });
      });
    }
  }
}

//* check performance *//
const endingTime = performance.now();
console.log("This code took " + (endingTime - startingTime) + " milliseconds.");
