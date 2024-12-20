import { popperGenerator } from "@popperjs/core";
import "../style/index.css";

/*
 //*  EDIT ONLY INSIDE THIS RENDER FUNCTION
  //*  This function is called every time the user changes types or changes any input
  //* 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: nueell, // social media usernames
        github: nueell,
        linkedin: ee,
        instagram: ee,

        name: pepe,
        lastName: garcia,
        role: fontanero,
        country: españa,
        city: valencia
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${
            variables.name == null || variables.name == ""
              ? "fisrt name"
              : variables.name
          }  ${
    variables.lastName == null || variables.lastName == ""
      ? "last name"
      : variables.lastName
  }</h1>
          <h2> ${
            variables.role == null || variables.role == ""
              ? "role"
              : variables.role
          }</h2>
          <h3>
           ${
             variables.city == null || variables.city == ""
               ? "city"
               : variables.city
           }, ${
    variables.country == null || variables.country == ""
      ? "country"
      : variables.country
  }</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://x.com/home" ${
              variables.twitter
            } target= "blanck"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/jorviltim"  ${
              variables.github
            } target= "blanck"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/feed/"   ${
              variables.linkedin
            } target= "blanck"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy" ${
              variables.linkedin
            } target= "blanck"><i class="fab fa-instagram"></i></a></li>
           </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://camo.githubusercontent.com/064b59ec2fd64cd8258b84353a74f4089f92f319c1478307de85dd69a1517b1b/68747470733a2f2f666163746f7279696f2e636f6d2f5f6970782f685f34303026715f3930266669745f696e736964652f696d672f62616e6e65722d66696f2d66702e706e67",
    // this is the url for the profile avatar
    avatarURL: "https://avatars.githubusercontent.com/u/45121848?v=4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
