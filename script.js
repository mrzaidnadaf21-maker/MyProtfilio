let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

cvBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "resume.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("Download Successfully");
});

submit.addEventListener("click", function () {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == "" && email.value == "") {
    alert("fill the details");
  } else {
    alert("Form Submiit successfully");
  }
  name.value = "";
  email.value = "";
  document.getElementById("msg").value = "";
});

let ul = document.querySelector("ul");
bar.addEventListener("click", function () {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    bar.className = "fa-solid fa-xmark";
  } else {
    bar.className = "fa-solid fa-bars";
  }
});
