function random() {
  const str = "0123456789ABCDEF";
  let randomStr = "#";
  for (let index = 0; index < 6; index++) {
    randomStr += str[Math.floor(Math.random() * 16)];
  }
  console.log(randomStr);
  return randomStr;
}

let inter;

function startChanging() {
  if (!inter) {
    inter = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = random();
  }
}

function stopChanging() {
  clearInterval(inter);
  inter = null;
}
document.getElementById("start").addEventListener("click", startChanging);

document.getElementById("stop").addEventListener("click", stopChanging);
