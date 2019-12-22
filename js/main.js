function changeFace() {
    var nav = document.getElementById("face");
    fileRoute = window.location.origin
    if (nav.src == `${fileRoute}/src/face-img.jpeg`) {
        nav.src = `${fileRoute}/src/face-img2.jpeg`;
    } else if (nav.src == `${fileRoute}/src/face-img2.jpeg`){
        nav.src = `${fileRoute}/src/face-img3.jpeg`;
    } else{
        nav.src = `${fileRoute}/src/face-img.jpeg`;
    }
}

function showNav() {
    var x = document.getElementById("myLinks");
    var name = document.getElementById("name");
    if (x.style.display === "flex") {
      x.style.display = "none";
      name.style.display = "block";
    } else {
      x.style.display = "flex";
      name.style.display = "none";
    }
  }

/*
function move() {
    var burger = document.getElementById("burguer");
    var name = document.getElementById("name");
    if (burger.className.includes("disappear")) {
        burger.classList.add("appear")
        burger.classList.remove("disappear")
    } else{
        burger.classList.add("disappear")
        burger.classList.remove("appear")
    }
}
*/
/*
function incrementEffect(){
    var num = document.getElementById("face");
    var target = dp
    var interval = setInterval(function() {
        num.text(number);
        if (number >= target) clearInterval(interval);
        number++;
    }, 30);
}*/

function navToggle(x) {
    x.classList.toggle("change");
  }