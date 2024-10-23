
import { openCloseMenu } from "./scripts/display-change.js";

import { useSmoothScroll } from "./scripts/scroll-effect.js";

import { enableHorizontalScroll } from "./scripts/scroll-effect.js";

const projectInfoWraps = document.querySelectorAll('.project-info-wrap');

const projectsContainer = document.querySelector('.projects-container');


openCloseMenu();
useSmoothScroll();


projectInfoWraps.forEach((wrap) => {
    enableHorizontalScroll(wrap);
    useSmoothScroll(projectsContainer,wrap)
})



