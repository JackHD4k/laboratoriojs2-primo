function primo() {
  let num = document.getElementById("num").value;
  let res = document.getElementById("res");

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  res.innerHTML = `El número ${num} es primo`;
}
