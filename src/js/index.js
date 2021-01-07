
// Toggle the title(h1) from 'State one' to 'State two' for a smoother transition
function change() {
  const head = document.getElementById("title");
  if (head.innerHTML === "Title goes here") {
    head.innerHTML = " ";
  } else {
    head.innerHTML = "Title goes here";
  }
}

// Toggle the inner text of the Subtitle(H2) between Lorum Ipsum for a smoother transition
function state(){
  const on = document.getElementById("text");
  if (on.innerHTML === "Subtitle goes here") {
    on.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else {
    on.innerHTML = "Subtitle goes here";
  }
}

// Toggle adding the class fade or unfade to change the opacity of each state revealing the other state
function opacity() {
  const w1 = document.getElementById("wrapper1");
  const w2 = document.getElementById("wrapper2");
  w1.classList.toggle("fade");
  w2.classList.toggle("unfade")
}

// Toggle the text 'Show description' to 'Hide description' for a smoother transition
function toggle() {
  const desc = document.getElementById("show-hide");
  if (desc.innerHTML === "Show description") {
    desc.innerHTML = "Hide description";
  } else {
    desc.innerHTML = "Show description";
  }
}

// Toggle button rotation, plus to cross
function rotate() {
  const btn = document.getElementById("button");
  btn.classList.toggle("rotate");
}

