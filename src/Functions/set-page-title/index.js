function setPageTitle(title = "") {
  const target = document.querySelector("title");
  target.innerText = title + "Just Post";
}

export default setPageTitle;
