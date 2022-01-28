const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


function introVal(){
var name = document.getElementById("name").value;
var address = document.getElementById("address").value;
var PhoneNo = document.getElementById("pno").value;
var email = document.getElementById("email").value;
var abtsummary = document.getElementById("abtsum").value;

document.getElementById("Name1").textContent = name.toUpperCase();
document.getElementById("abtsummary1").textContent = abtsummary;
document.getElementById("email1").textContent = email;

}

function eduVal(){
var suname = document.getElementById("suname").value;
var suaddress = document.getElementById("suaddress").value;
var weblink = document.getElementById("weblink").value;
var degree = document.getElementById("degree").value;
var pasyr = document.getElementById("poyr").value;
var abtsummaryed = document.getElementById("abtsummaryed").value;

document.getElementById("suname1").textContent = suname.toUpperCase();
document.getElementById("suaddress1").textContent = suaddress;

document.getElementById("degree1").textContent = degree.toUpperCase();
document.getElementById("pasyr1").textContent = pasyr;
document.getElementById("abtsummary3").textContent = abtsummaryed;

}

function skillVal(){
var skill1 = document.getElementById("skill1").value;
var skill2 = document.getElementById("skill2").value;
var skill3 = document.getElementById("skill3").value;
var skill4 = document.getElementById("skill4").value;
var skill5 = document.getElementById("skill5").value;

document.getElementById("skill11").textContent = skill1.toUpperCase();
document.getElementById("skill12").textContent = skill2.toUpperCase();
document.getElementById("skill13").textContent = skill3.toUpperCase();
document.getElementById("skill14").textContent = skill4.toUpperCase();
document.getElementById("skill15").textContent = skill5.toUpperCase();

}

function expVal(){
var coname = document.getElementById("coname").value;
var position = document.getElementById("position").value;
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var yrexp = document.getElementById("yrexp").value;
var abtsummaryco = document.getElementById("abtsumco").value;

document.getElementById("coname1").textContent = coname.toUpperCase();
document.getElementById("Position1").textContent = position.toUpperCase();
document.getElementById("abtsummary2").textContent = abtsummaryco;
document.getElementById("from1").textContent = from;
document.getElementById("to1").textContent = to;
document.getElementById("yrexp1").textContent = yrexp;

}

