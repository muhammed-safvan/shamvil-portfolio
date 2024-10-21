
const menuContainer = document.querySelector("#menu-container");

const menuBtn = document.querySelector("#menu-span");

const menuCloseIcon = document.querySelector(".material-symbols-outlined");

export function openCloseMenu() {
  menuBtn.addEventListener("click", () => {
    menuBtn.style.opacity = "0";
    menuBtn.style.display = "none";
    
    menuContainer.style.display = "flex";
    setTimeout(() => {
      menuContainer.style.opacity = "1";
    },0);
  });

  menuCloseIcon.addEventListener("click", () => {
  
    menuContainer.style.opacity = "0";
    setTimeout(() => {
      menuContainer.style.display = "none";

    },550);

    menuBtn.style.display = "";
    setTimeout(() => {
      menuBtn.style.opacity = "1";
    }, 0);
  });
}