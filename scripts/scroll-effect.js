const menuContainer = document.querySelector("#menu-container");

const menuLinkWrap = document.querySelector(".menu-links-wrapper");



export function useSmoothScroll(parent = menuContainer, child = menuLinkWrap) {
  parent.addEventListener("scroll", () => {
    const scrollTop = parent.scrollTop - 65;
    const maxScrollTop = parent.scrollHeight - parent.clientHeight;
    const scrollFraction = scrollTop / maxScrollTop;

    child.style.transform = `translateY(-${scrollFraction * 100}%) scaleY(${
      1 + scrollFraction * 0.05
    })`;
  });
}

export function enableHorizontalScroll(container) {
  container.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    container.scrollLeft += e.deltaY; // Scroll horizontally
  });
}
