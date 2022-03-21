console.log("Hello , me");

let div = document.querySelector("div");

function myCallback(event) {
  let target = event.target;
  if (target.tagName === "P") {
    target.style.color = "red";
  }
}

div.addEventListener("click", myCallback);
