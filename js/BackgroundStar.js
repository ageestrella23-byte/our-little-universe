export default class BackgroundStar {
    constructor(container, left, top, size, delay, duration, opacity) {
        this.container = container;
        this.left = left;
        this.top = top;
        this.size = size;
        this.delay = delay;
        this.duration = duration;
        this.opacity = opacity;
    }

    create() {
        const star = document.createElement("span");

        star.classList.add("background-star");

        if (parseFloat(this.size) >= 2.2) {
            star.classList.add("large");
        }

        star.style.left = this.left;
        star.style.top = this.top;
        star.style.width = this.size;
        star.style.height = this.size;
        star.style.opacity = this.opacity;
        star.style.animationDelay = this.delay;
        star.style.animationDuration = this.duration;

        this.container.appendChild(star);
    }
}