import icons, { IIcon } from "./icons";
import "./style.css";

const dockEl = document.querySelector(".dock");

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  for (let icon of icons) {
    fragment.appendChild(createIcon(icon));
  }
  dockEl?.appendChild(fragment);
});

function createIcon(icon: IIcon) {
  const iconEl = document.createElement("a");
  iconEl.innerHTML = `
    <img src="${icon.path}" alt="${icon.name}" />
  `;
  iconEl.classList.add("icon");
  return iconEl;
}
