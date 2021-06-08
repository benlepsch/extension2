class Menu {

}

class Game {
    constructor(ground_level=150, ground_color='#19e03a', sky_color='#19869c') {
        this.ground_level = ground_level;
        this.ground_color = ground_color;
        this.sky_color = sky_color;
        this.obstacles = [];
    }

    draw() {
        ctx.fillStyle = this.sky_color;
        ctx.lineWidth = 1;
        ctx.fillRect(0, 0, canvas.width, this.ground_level);

        ctx.fillStyle = this.ground_color;
        ctx.fillRect(0, this.ground_level, canvas.width, canvas.height);
    }
}