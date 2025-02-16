const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invsi');
    } else {
        dot.classList.remove('invsi');
    }
    hour.textContent = String("0"+now.getHours() % 12 || 12).padStart(2, '0').slice(-1);
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