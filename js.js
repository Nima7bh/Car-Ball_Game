// Variables -----------------------------------------------------------------------------------------------------------------------

let form1 = document.querySelector(".form");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");

// Event Listeners ------------------------------------------------------------------------------------------------------------------

form1.addEventListener("submit", getNewForm);
form2.addEventListener("submit", goForMove);

// Functions ------------------------------------------------------------------------------------------------------------------------

// get information from The First form
function getNewForm(e) {
  e.preventDefault();

  let input = document.querySelector(".textBox").value;

  let radio = document.querySelectorAll(".radio");

  let gender;
  let radioValue;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radioValue = radio[i].value;

      if (radioValue == 1) {
        gender = "Mr";
      } else {
        gender = "Miss";
      }
    }
  }
  makeSentence(input, gender, radioValue);
}

// Make the sentence and prepare for showing that
function makeSentence(input, gender, radioValue) {
  let para = document.createElement("label");

  para.textContent = `Hi, ${gender} ${input} press the button below to start`;

  if ((radioValue != 1 && radioValue != 2) || input.length == 0) {
    makeError();
  } else {
    form2.insertBefore(para, form2.firstChild);

    form2.classList.remove("dispnone");
    form1.classList.add("dispnone");
  }
}

function makeError() {
  let error = document.createElement("a");
  error.classList.add("error");
  error.textContent = "Please Compelet the FORM !!";
  error.classList.remove("dispnone");

  let radioDiv = document.querySelector(".radioDiv");
  radioDiv.appendChild(error);
  setTimeout(() => {
    error.classList.add("dispnone");
  }, 1100);
}

// add moving animation to the content
function goForMove(e) {
  e.preventDefault();

  let box = document.querySelector(".box");
  let rotSvg = document.querySelector(".rotSvg");
  let polygon = document.querySelector(".polygon");

  box.classList.add("move");
  rotSvg.classList.add("rotat");
  polygon.classList.add("pol");

  setTimeout(() => {
    form2.style.display = "none";
    theLast();
  }, 9700);
}

// showing Reset Button
function theLast() {
  form3.classList.remove("dispnone");
}
