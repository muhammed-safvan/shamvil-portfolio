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
      e.preventDefault(); // Prevent default scroll behavior

      // Calculate max horizontal scroll
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft < maxScrollLeft) {
          // Horizontal scroll is not yet completed
          container.scrollLeft += e.deltaY; // Scroll horizontally
      } else {
          // Horizontal scroll completed, now scroll vertically in .scroll-container
          console.log("Horizontal scrolling completed, now scrolling vertically.");

          const verticalContainer = document.querySelector('.scroll-container');
          if (verticalContainer) {
              verticalContainer.scrollTop += e.deltaY; // Scroll vertically
          } else {
              console.warn('.scroll-container not found');
          }
      }
  });
}
