window.onload = function () {
  document.getElementById("avn").value = document.getElementById("avn").value;
  document.getElementById("wavn").value = document.getElementsByName("wavn")[0].value;
  var src = document.getElementById("avn"),
    dst = document.getElementById("wavn");
  src.addEventListener("input", function () {
    dst.value = src.value;
  });

}
