const navmin_show = document.querySelector("#hid_nav");
const navmin_on = document.querySelector("#nav_on");
const navmin_off = document.querySelector("#nav_off");
const hero = document.querySelector("#hero_sec");
//---------------------------------------------------------
let md_n = document.documentElement.getAttribute("class");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let light_t = document.querySelector("#lightt");
let dark_t = document.querySelector("#darkt");
//---------------------------------------------------------
const container_div = document.querySelectorAll(".div_card_projects");
const fr_div_1 = document.querySelector("#project0");
const fr_div_2 = document.querySelector("#project1");
const fr_div_3 = document.querySelector("#project2");
//---------------------------------------------------------
navmin_on.addEventListener("click", () => {
  navmin_show.classList.remove("hidden");
  navmin_show.classList.add("flex");
});
//---------------------------------------------------------
navmin_off.addEventListener("click", () => {
  navmin_show.classList.remove("flex");
  navmin_show.classList.add("hidden");
});
//---------------------------------------------------------

light.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "dark");
  document.getElementById("light").style.display = "none";
  document.getElementById("dark").style.display = "block";
});
dark.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "light");
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";
});

//---------------------------------------------------------
light_t.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "dark");
  document.getElementById("lightt").style.display = "none";
  document.getElementById("darkt").style.display = "block";
});

dark_t.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "light");
  document.getElementById("darkt").style.display = "none";
  document.getElementById("lightt").style.display = "block";
});

//---------------------------------------------------------

// For Project Hover Effects
container_div.forEach((div, idx) => {
  div.addEventListener("mouseover", () => {
    if (idx === 0) {
      fr_div_1.classList.remove("hidden");
      fr_div_1.classList.add("flex");
    } else if (idx === 1) {
      fr_div_2.classList.remove("hidden");
      fr_div_2.classList.add("flex");
    } else if (idx === 2) {
      fr_div_3.classList.remove("hidden");
      fr_div_3.classList.add("flex");
    }
  });
  div.addEventListener("mouseout", () => {
    if (idx === 0) {
      fr_div_1.classList.remove("flex");
      fr_div_1.classList.add("hidden");
    } else if (idx === 1) {
      fr_div_2.classList.remove("flex");
      fr_div_2.classList.add("hidden");
    } else if (idx === 2) {
      fr_div_3.classList.remove("flex");
      fr_div_3.classList.add("hidden");
    }
  });
});
