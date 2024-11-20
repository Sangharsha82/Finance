let slogan = document.querySelector(".slogan");
let signinbtn = document.querySelector(".signin");

const signin = () => {
  slogan.classList.add("opacity-0");
  slogan.classList.remove("text-gray-900");
  console.log("slogan hidden");
};
signinbtn.addEventListener("click", signin);
