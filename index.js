import cycles from "./scripts/cycles.js";
import fibonacci from "./scripts/fibonacci.js";

function init() {
    cycles();
    fibonacci();
}

window.addEventListener('load', init)
