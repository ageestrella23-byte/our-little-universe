export default class Memory {
    constructor(title, date, message, photo = "", song = "") {
        this.title = title;
        this.date = date;
        this.message = message;
        this.song = song;

        if (Array.isArray(photo)) {
            this.photos = photo;
        } else if (photo && photo.trim() !== "") {
            this.photos = [photo];
        } else {
            this.photos = [];
        }

        this.video = "";
        this.embed = "";
        this.dedication = "";
    }

    hasPhoto() {
        return this.photos.length > 0;
    }
}