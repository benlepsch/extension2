/**
 * Ben Lepsch
 * bean runner or something idk
 */


/* create canvas */
const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 200;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');



/* main loop */
let fpsInterval, then, startTime, elapsed;
function startGame(fps) {
	fpsInterval = 1000 / fps;
	then = Date.now();
	startTime = then;
	runGame();
}

function runGame() {
	requestAnimationFrame(runGame);
	now = Date.now();
	elapsed = now - then;

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);
        
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // draw game
        let inp = checkKeys();
        p.updateAccel(inp[0]);
        if (inp[1]) {
            p.startJump();
        }
        p.update();
        g.draw();
        p.draw();
	}
}


/* start game */
let p = new Player();
let g = new Game();

startGame(60);