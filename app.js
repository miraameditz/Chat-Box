let output = document.getElementById("output");
let input = document.getElementById("input");
let arr = [];

function sendBtn() {
  arr.push(input.value);
  output.innerHTML = "";
  arr.map((item) => {
    output.innerHTML += `<p><b>You</b> ${item}</p>`;
  });

  if (input.value == "") {
    Swal.fire("Please Enter Something");
  }

  input.value = "";
}

let drobox = document.getElementById("drobox");

drobox.style.display = "none";

function dropdown() {
  if (drobox.style.display === "none") {
    drobox.style.display = "block";
  } else {
    drobox.style.display = "none";
  }
}

function clearBtn() {
  output.innerHTML = "";
  arr = [];
  drobox.style.display = "none";
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    arr.push(input.value);
    output.innerHTML = "";
    arr.map((item) => {
      output.innerHTML += `<p><b>You:</b> ${item}  <br/> </p>`;
    }, 2000);

    if (input.value == "") {
      Swal.fire("Please Enter Something");
    }

    input.value = "";
  }
});

let body = document.querySelector("body");
let darkBtn = document.querySelector(".darkBtn");
let colorBox = document.querySelector(".main-box");
let chatCol = document.querySelector(".chat-col");

darkBtn.addEventListener("click", function () {
  if (body.style.backgroundColor === "rgb(0, 0, 0)") {
    body.style.backgroundColor = "#fff";
    output.style.backgroundColor = "#fff";
    chatCol.style.backgroundColor = "#fff";
    colorBox.style.boxShadow = "1px 1px 5px #000";
  } else {
    body.style.backgroundColor = "#000";
    output.style.backgroundColor = "#000";
    chatCol.style.backgroundColor = "#000";
    colorBox.style.boxShadow = "1px 1px 5px #fff";
  }

  drobox.style.display = "none";
});
