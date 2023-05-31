let p1 = document.querySelector("#p1");

const mudarC = () => {
  p1.style.color = "green";
};
const mudarT = () => {
  p1.innerHTML = "Mudei";
};
const mudarV = () => {
  p1.style.color = "black";
  p1.innerHTML = "Lorem, ipsum dolor.";
};

p1.addEventListener("click", mudarT);
p1.addEventListener("mouseenter", mudarC);
p1.addEventListener("mouseleave", mudarV);
