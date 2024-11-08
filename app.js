let output = document.getElementById("output");
let input = document.getElementById("input");
let arr = [];

function sendBtn() {
  arr.push(input.value);
  output.innerHTML = "";
  arr.map((item) => {
    output.innerHTML += `<p>${item}  <br/> </p>`;
  }, 2000);

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
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    arr.push(input.value);
    output.innerHTML = "";
    arr.map((item) => {
      output.innerHTML += `<p>${item}  <br/> </p>`;
    }, 2000);

    if (input.value == "") {
      Swal.fire("Please Enter Something");
    }

    input.value = "";
  }
});
