const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p"); //trae el texto
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 4;
let cont = 1;

btn_adelante2.addEventListener("click", function (e) {
  e.preventDefault();
  //---------------------------------------------------------
  var nombre = document.getElementById("nombres").value;
  if (nombre == "") {
    document.getElementById("nombres-error").innerHTML =
      "* Este campo es obligatorio";
    document.getElementById("nombres").style.borderColor = "red";
  } else {
    document.getElementById("nombres-error").innerHTML = ""; //regresa y no muestra el mensaje de error
    document.getElementById("nombres").style.borderColor = "lightgrey"; //regresa y los bordes son de color normal
  }
  //-------------------------------------------------------------------------------
  var apellidoPat = document.getElementById("apellido1").value;
  if (apellidoPat == "") {
    document.getElementById("apellido1-error").innerHTML =
      "* Este campo es obligatorio";
    document.getElementById("apellido1").style.borderColor = "red";
  } else {
    document.getElementById("apellido1-error").innerHTML = ""; //regresa y no muestra el mensaje de error
    document.getElementById("apellido1").style.borderColor = "lightgrey"; //regresa y los bordes son de color normal
    //----------------------------------------------------------------------------------
    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active"); //agrega a la lista de clase num elactive
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
  }
});
btn_adelante3.addEventListener("click", function (e) {
  e.preventDefault();

  movPag.style.marginLeft = "-50%";
  num[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");
  cont += 1;
});
btn_adelante4.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-75%";
  num[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");
  cont += 1;
});
//----------------------------------------------------
btn_final.addEventListener("click", function (e) {
  e.preventDefault();
  num[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");

  alert("Aquí finaliza el registro");
  cont += 1;
  /*------------------------------------------*/
});
//----------------------------------------------------
btn_atras1.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});
btn_atras2.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-25%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});
btn_atras3.addEventListener("click", function (e) {
  e.preventDefault();
  movPag.style.marginLeft = "-50%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});
