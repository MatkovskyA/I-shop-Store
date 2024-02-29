function taglineBtn() {
  const closeTaglineBnt = document.querySelector(".tagline-close");
  const tagline = document.querySelector(".tagline");
  closeTaglineBnt.addEventListener("click", () => tagline.remove());
}

export default taglineBtn;
