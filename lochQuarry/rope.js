let el = document.getElementsByClassName("groupbit");
let cl = el[0];
let ab = el[1];
let pc = el[2];
cl.addEventListener("dblclick", function(){window.location.assign("https://en.wikipedia.org/wiki/Climbing")});
ab.addEventListener("dblclick", function(){window.location.assign("https://en.wikipedia.org/wiki/Abseiling")});
pc.addEventListener("dblclick", function(){window.location.assign("https://en.wikipedia.org/wiki/Pole_climbing")});

document.getElementById("body").style.margin = "auto";
