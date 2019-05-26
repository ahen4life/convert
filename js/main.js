function convert (input) {
  let result = 0;
  let userCelsius = document.getElementById("C").value;
  let userFahrenheit = document.getElementById("F").value;

  if (userCelsius) {
    result = Math.round(userCelsius*(9/5) + 32);
    document.getElementById("F").value = result;
  } else {
    result = userFahrenheit*(9/5) + 32;
    document.getElementById("C").value = result;
  }
}
