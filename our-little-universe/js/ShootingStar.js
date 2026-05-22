export default class ShootingStar {
    constructor(container, top, left, delay, duration, length) {
        this.container = container;
        this.top = top;
        this.left = left;
        this.delay = delay;
        this.duration = duration;
        this.length = length;
    }

    create() {
        const star = document.createElement("span");

        star.classList.add("shooting-star");

        star.style.top = this.top;
        star.style.left = this.left;
        star.style.animationDelay = this.delay;
        star.style.animationDuration = this.duration;
        star.style.setProperty("--length", this.length);

        this.container.appendChild(star);
    }
}