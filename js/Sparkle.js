export default class Sparkle {
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
        const sparkle = document.createElement("span");
        sparkle.classList.add("sparkle");

        sparkle.style.left = this.left;
        sparkle.style.top = this.top;
        sparkle.style.width = this.size;
        sparkle.style.height = this.size;
        sparkle.style.opacity = this.opacity;
        sparkle.style.animationDelay = this.delay;
        sparkle.style.animationDuration = this.duration;

        this.container.appendChild(sparkle);
    }
}