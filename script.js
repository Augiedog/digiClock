const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
const hrSwitch = $('.checkbox');
let showDot = true;
let toggle = true;
addEventListener('change', () => {
    toggle = !toggle;
})

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invsi');
    } else {
        dot.classList.remove('invsi');
    }

    if (toggle) {
        hour.textContent = String(now.getHours() % 12 || 12).padStart(2, '0');
    } else {
        hour.textContent = String(now.getHours()).padStart(2, '0');
    }
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    Array
        .from(week.children)
        .forEach(
            (ele) => {
                ele.classList.remove('active');
            }
        );
    week
        .children[now.getDay()]
        .classList
        .add('active');
};

setInterval(update, 500);