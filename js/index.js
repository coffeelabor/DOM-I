const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// ###################################################

// Create selectors by using any of the DOM element's methods
// Note that IDs have been used on all images.Use the IDs to update src path content

let banner = document.getElementById("cta-img");
banner.setAttribute("src", siteContent["cta"]["img-src"]);

// ###################################################

// Remember, NO direct updating of the HTML source is allowed.
// Using your selectors, update the content to match the example file.
// Remember to update the src attributes on images

// let green = document.querySelectorAll("header nav a");
// green.forEach(aGreen => {
//   aGreen.style.color = "green";
// });

let navItem = document.querySelectorAll("nav a");
navItem.forEach((navEach, i) => {
  navEach.textContent = siteContent.nav[`nav-item-${i + 1}`];
});
// navItem[0].textContent = siteContent["nav"]["nav-item-1"];
// navItem[1].textContent = siteContent["nav"]["nav-item-2"];
// navItem[2].textContent = siteContent["nav"]["nav-item-3"];
// navItem[3].textContent = siteContent["nav"]["nav-item-4"];
// navItem[4].textContent = siteContent["nav"]["nav-item-5"];
// navItem[5].textContent = siteContent["nav"]["nav-item-6"];

let headerOne = (document.querySelector(".cta .cta-text h1").textContent =
  "Dom is Awesome");

let button = (document.querySelector(".cta .cta-text button").textContent =
  "Get Started");

let mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll("p");
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contact = document.querySelectorAll(".contact");
contact[0].textContent = siteContent["contact"]["contact-h4"];

// let contactText = document.querySelectorAll(".contact p");
// contactText[0].textContent = siteContent["contact"]["address"];
// contactText[1].textContent = siteContent["contact"]["phone"];
// contactText[2].textContent = siteContent["contact"]["email"];

// #########################################################
// Change the color of the navigation text to be green.
// Utilize.appendChild() and.prepend() to add two new items to the navigation system.You can call them whatever you want.
// Check your work by looking at the original html in the browser
let green = document.querySelectorAll("header nav a");
green.forEach(aGreen => {
  aGreen.style.color = "green";
});

let newNav = document.createElement("news");
newNav.textContent = " news";
document.querySelector("header nav a").appendChild(newNav);
