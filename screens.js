
class Menu {
    constructor() {
        this.icon = document.getElementById('bean');
        this.iconHeight = 69;
        this.iconWidth = 122;
    }

    // if the mouse is on the bean button
    checkMouseOverStart(mx, my) {
        if (mx >= 0 && mx <= this.iconWidth && my >= 0 && my <= this.iconHeight) {
            return true;
        }
    }

    // big ass bean and some text underneath that says "Click te bean to start game"
    draw() {
        ctx.fillStyle = 'rgb(148, 90, 53)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.icon, 0, 0);
        ctx.font = '30px Calibri';
        ctx.fillStyle = 'black';
        ctx.fillText('click theb ean to start', 20, 100);
    }
}

// draw background, move clouds, spawn obstacles, what have you
class Game {
    constructor(ground_level=150, ground_color='#19e03a', sky_color='#19869c') {
        this.ground_level = ground_level;
        this.ground_color = ground_color;
        this.sky_color = sky_color;
        this.obstacles = [];
        this.running = false;
    }

    begin() {
        player = new Player();
    }

    lose() {
        player = null;
        this.running = false;
    }

    draw() {
        ctx.fillStyle = this.sky_color;
        ctx.lineWidth = 1;
        ctx.fillRect(0, 0, canvas.width, this.ground_level);

        ctx.fillStyle = this.ground_color;
        ctx.fillRect(0, this.ground_level, canvas.width, canvas.height);
    }
}