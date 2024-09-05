window.onload = start;

function start() {
  document.querySelectorAll(".button")[0].onclick = action1;
  document.querySelectorAll(".button")[1].onclick = action2;
  document.querySelectorAll(".button")[2].onclick = action3;
  document.querySelectorAll(".button")[3].onclick = action4;
}

function action1() {
  document.querySelector(".container").innerHTML = "Hi, World";
}

function action2() {
  document.querySelector(".container").innerHTML = "<img src='img/js.png'>";
}

function action3() {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", "<button>Button</button>");
  // document.querySelector(".container").innerHTML+="<button>Button</button>"
}

function action4() {
  document.querySelector(".container").innerHTML = "";
}
