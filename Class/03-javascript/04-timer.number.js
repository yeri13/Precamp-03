
function getToken() {
  const aaa = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("time").innerText = aaa;

  let count = 10
  setInterval(() => {
    if (count > 0){
        count = count - 1
        document.getElementById("count2").innerText = count

        // document.getElementById("count2").innerText = count
        // count = count - 1
    }
  }, 1000)
}
