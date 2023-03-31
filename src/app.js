const linksWrapper = document.querySelector("[data-links-wrapper]");
const logo = document.querySelector("[data-logo]");

const logoRightPoint = logo.getBoundingClientRect().right;
const linksLeftPoint = linksWrapper.getBoundingClientRect().left;
const space = linksLeftPoint - logoRightPoint;

if (space < 50) {
  const burger = document.querySelector("[data-burger]");
  burger.style.display = "flex";

  const links = document.querySelector("[data-links]");
  links.style.display = "none";
  let isLinksVisible = true;

  burger.addEventListener("click", () => {
    if (isLinksVisible) {
      links.style.display = "flex";
      links.style.flexDirection = "column";
      links.style.alignItems = "center";
      links.style.justifyContent = "center";
      links.style.position = "fixed";
      links.style.top = "0";
      links.style.right = "0";
      links.style.backgroundColor = "white";
      links.style.padding = "1rem";
      links.style.width = "100%";
      links.style.height = "100vh";
      links.style.zIndex = "1";
      isLinksVisible = false;
    } else {
      links.style.display = "none";
      isLinksVisible = true;
    }
  });
}
