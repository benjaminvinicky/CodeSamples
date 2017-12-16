//the audio references
var backgroundAudio = document.querySelector("#background");
var gemAudio = document.querySelector("#gem");
var keyPopAudio = document.querySelector("#keyPop");
var doorPopAudio = document.querySelector("#doorPop");
var winAudio = document.querySelector("#win");
var startAudio = document.querySelector("#start");
var failAudio = document.querySelector("#fail");
var gameOverAudio = document.querySelector("#gameOverAudio");

//my html div references
var startPage = document.querySelector("#startPage");
var endPage = document.querySelector("#endPage");
var startbtn = document.querySelector("#toPlay");
var hardbtn = document.querySelector("#toPlayHard");
var gameOverScreen = document.querySelector("#gameOver");

//a required hard mode
var hardMode = false;
var win = false;

//event listener to start the game
startbtn.addEventListener("click", playGame, false);
hardbtn.onclick = function() {
    hardMode = true;
    playGame();
};

//I put everything inside a function so that nothing was going on while waiting on the player to click.
function playGame() {
    //The canvas
    var canvas = document.querySelector("canvas");
    canvas.style.display = "block";
    var drawingSurface = canvas.getContext("2d");
    startAudio.play();
    startPage.style.display = "none";
    endPage.style.display = "none";


    if (hardMode === true) {
        canvas.width = 1216;

        var map = [
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 3],
            [3, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 3],
            [3, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 2, 1, 3],
            [3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [3, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 3],
            [3, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [3, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 3],
            [3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        ];


        var gameObjects = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    } else {
        var map = [
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 3],
            [3, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3],
            [3, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 3],
            [3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [3, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 3],
            [3, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 3],
            [3, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 3],
            [3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        ];


        //The game objects map
        var gameObjects = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    //Map code
    var EMPTY = 0;
    var FLOOR = 1;
    var BOX = 2;
    var WALL = 3;
    var DAVE = 4;
    var GEM = 5;
    var KEY = 6;


    //The size of each tile cell
    var SIZE = 64;

    //The number of rows and columns
    var ROWS = map.length;
    var COLUMNS = map[0].length;

    //The number of columns on the tilesheet
    var tilesheetColumns = 4;

    //Sprites we need to access by name
    var dave = null;
    var timeDisplay = null;
    var timerMessage = null;

    //Arrays to store the game objects
    var sprites = [];
    var messages = [];
    var boxes = [];
    var gems = [];
    var myKey = [];
    var myDoor = [];//I could have not used an array, but when I did I tried, I broke stuff I didn't have time to fix
    var walls = [];

    var assetsToLoad = [];
    var assetsLoaded = 0;

    //Load the tilesheet image
    var image = new Image();
    image.addEventListener("load", loadHandler, false);
    image.src = "../images/mazeEscape1.png";
    assetsToLoad.push(image);

    //Game variables
    var gemsCollected = 0;
    var onlyKey = false;

    //The game timer

    gameTimer.time = 30;
    gameTimer.start();

    //Game states
    var BUILD_MAP = 1;
    var PLAYING = 2;
    var OVER = 3;

    var gameState;

    //Arrow key codes
    var UP = 38;
    var DOWN = 40;
    var RIGHT = 39;
    var LEFT = 37;

    var UP2 = 87;
    var DOWN2 = 83;
    var RIGHT2 = 68;
    var LEFT2 = 65;

    //Directions
    var moveUp = false;
    var moveDown = false;
    var moveRight = false;
    var moveLeft = false;

    //Because we can move!
    window.addEventListener("keydown", function(event) {
        switch (event.keyCode) {
            case UP:

            case UP2:
                moveUp = true;
                break;

            case DOWN:

            case DOWN2:
                moveDown = true;
                break;

            case LEFT:

            case LEFT2:
                moveLeft = true;
                break;

            case RIGHT:

            case RIGHT2:
                moveRight = true;
                break;
        }
    }, false);
	//because we can stop moving! Oh, I added WASD controls because they are so much better. Go on... try it. Feel the difference...
    window.addEventListener("keyup", function(event) {
        switch (event.keyCode) {
            case UP:

            case UP2:
                moveUp = false;
                break;

            case DOWN:

            case DOWN2:
                moveDown = false;
                break;

            case LEFT:

            case LEFT2:
                moveLeft = false;
                break;

            case RIGHT:

            case RIGHT2:
                moveRight = false;
                break;
        }
    }, false);

    //Start the game animation loop
    update();

    function update() {
        //The animation loop
        requestAnimationFrame(update, canvas);

        //The loading thing was nice but seemed not needed
        switch (gameState) {
            case BUILD_MAP:
                buildMap(map);
                buildMap(gameObjects);
                createOtherObjects();
                gameState = PLAYING;
                break;

            case PLAYING:
                playGame();
                break;

            case OVER:
                endGame();
                break;
        }

        //Render the game
        render();
    }
	
	
	//once everythng is all loaded I set the background music to have volume and play it!
    function loadHandler() {
        assetsLoaded++;
        backgroundAudio.loop = true;
        backgroundAudio.volume = .5;
        backgroundAudio.currentTile = 0;
        backgroundAudio.play();
        if (assetsLoaded === assetsToLoad.length) {
            //Remove the load handler
            image.removeEventListener("load", loadHandler, false);

            //Build the level 
            gameState = BUILD_MAP;
        }
    }

    function buildMap(levelMap) {
        for (var row = 0; row < ROWS; row++) {
            for (var column = 0; column < COLUMNS; column++) {
                var currentTile = levelMap[row][column];

                if (currentTile !== EMPTY) {
                    //Find the tile's x and y position on the tile sheet
                    var tilesheetX = Math.floor((currentTile - 1) % tilesheetColumns) * SIZE;
                    var tilesheetY = Math.floor((currentTile - 1) / tilesheetColumns) * SIZE;

                    if (!onlyKey) {
                        switch (currentTile) {
                            case FLOOR:
                                var floor = Object.create(spriteObject);
                                floor.sourceX = tilesheetX;
                                floor.sourceY = tilesheetY;
                                floor.x = column * SIZE;
                                floor.y = row * SIZE;
                                sprites.push(floor);
                                break;

                            case BOX:
                                var box = Object.create(spriteObject);
                                box.sourceX = tilesheetX;
                                box.sourceY = tilesheetY;
                                box.x = column * SIZE;
                                box.y = row * SIZE;
                                sprites.push(box);
                                boxes.push(box);
                                break;

                            case WALL:
                                var wall = Object.create(spriteObject);
                                wall.sourceX = tilesheetX;
                                wall.sourceY = tilesheetY;
                                wall.x = column * SIZE;
                                wall.y = row * SIZE;
                                sprites.push(wall);
                                walls.push(wall);
                                break;

                            case GEM:
                                var gem = Object.create(spriteObject);
                                gem.sourceX = tilesheetX;
                                gem.sourceY = tilesheetY;
                                gem.sourceWidth = 64;
                                gem.sourceHeight = 50;
                                gem.width = 55;
                                gem.height = 50;
                                gem.x = column * SIZE + 5;
                                gem.y = row * SIZE + 3;
                                gems.push(gem);
                                sprites.push(gem);
                                break;

                            case DAVE:
                                //Note: "dave" has already been defined in the main - YAY
                                dave = Object.create(spriteObject);
                                dave.sourceX = tilesheetX;
                                dave.sourceY = tilesheetY;
                                dave.x = column * SIZE;
                                dave.y = row * SIZE;
                                dave.width -= 6;
                                dave.height -= 6;
                                sprites.push(dave);
                                break;
                        }
                    } else {
                        switch (currentTile) {
							//there are many ways to do this, I chose this way because I hadn't thought of a better way, and when I did I felt lazy...
                            case KEY:
                                var key = Object.create(spriteObject);
                                key.sourceX = tilesheetX;
                                key.sourceY = tilesheetY;
                                key.x = column * SIZE;
                                key.y = row * SIZE;
                                sprites.push(key);
                                myKey.push(key);
                                break;
                        }
                    }
                }
            }
        }
    }
	//this is my genius way of producing a random key- tested exaustingly
    function produceKey() {
        var stopLoop = false;

        while (stopLoop === false) {
            var rowCheck = Math.floor(Math.random() * ROWS);
            var columnCheck = Math.floor(Math.random() * COLUMNS);

            if (gameObjects[rowCheck][columnCheck] === 0 && map[rowCheck][columnCheck] !== 3 && map[rowCheck][columnCheck] !== 2) {
                gameObjects[rowCheck][columnCheck] = 6;
                stopLoop = true;

                onlyKey = true;
                buildMap(gameObjects);
                keyPopAudio.play();
            }
        }
    }
	//this is my genius way of producing a random door
    function produceDoor() {
        var madeDoor = false;
        //0,13,30,43
        while (madeDoor === false) {
            var wallCheck = Math.floor(Math.random() * walls.length);

            if (!compareWalls(wallCheck)) {
                var door = Object.create(spriteObject);
                door.sourceX = walls[wallCheck].sourceX;
                door.sourceY = walls[wallCheck].sourceY + 64;
                door.x = walls[wallCheck].x;
                door.y = walls[wallCheck].y;
                sprites.push(door);
                myDoor.push(door);
                walls[wallCheck].visible = false;
                walls.splice(wallCheck, 1);

                madeDoor = true;
                doorPopAudio.play();
            }
        }
    }
	//a function that compares with things that cannot be
    function compareWalls(wall) {
        var thisWall = wall;
        var found = false;
        if (hardMode === false) {
            var myArray = [0, 2, 5, 6, 7, 11, 13, 20, 23, 24, 30, 37, 43];

        } else {
            var myArray = [0, 2, 5, 8, 9, 10, 11, 16, 18, 25, 28, 29, 35, 42, 53];
        }
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] === thisWall) {
                found = true;
            }
        }
        return found;
    }
	//creates time related objects
    function createOtherObjects() {
        timeDisplay = Object.create(spriteObject);
        timeDisplay.sourceX = 0;
        timeDisplay.sourceY = 128;
        timeDisplay.sourceWidth = 128;
        timeDisplay.sourceHeight = 64;
        timeDisplay.width = 128;
        timeDisplay.height = 64;
        timeDisplay.x = canvas.width / 2 - timeDisplay.width / 2;
        timeDisplay.y = 0;
        sprites.push(timeDisplay);

        timerMessage = Object.create(messageObject);
        timerMessage.x = canvas.width / 2 - 23;
        timerMessage.y = 10;
        timerMessage.font = "bold 40px Helvetica";
        timerMessage.fillStyle = "white";
        timerMessage.text = "";
        messages.push(timerMessage);
    }
	
	//moving and testing
    function playGame() {
        //Up
        if (moveUp && !moveDown) {
            dave.vy = -4;
        }
        //Down
        if (moveDown && !moveUp) {
            dave.vy = 4;
        }
        //Left
        if (moveLeft && !moveRight) {
            dave.vx = -4;
        }
        //Right
        if (moveRight && !moveLeft) {
            dave.vx = 4;
        }

        //Set dave's velocity to zero if none of the keys are being pressed
        if (!moveUp && !moveDown) {
            dave.vy = 0;
        }
        if (!moveLeft && !moveRight) {
            dave.vx = 0;
        }

        dave.x += dave.vx;
        dave.y += dave.vy;

        //Collisions with boxes
        for (var i = 0; i < boxes.length; i++) {
            blockRectangle(dave, boxes[i]);
        }

        for (var i = 0; i < walls.length; i++) {
            blockRectangle(dave, walls[i]);
        }

        //Collisions with gems
        for (var i = 0; i < gems.length; i++) {
            var thisGem = gems[i];

            //If there's a collision, make the gems invisible,
            //reduce bombsDefused by 1, and check whether
            //the player has won the game

            if (hitTestCircle(dave, thisGem) && thisGem.visible) {
                thisGem.visible = false;
                gemAudio.currentTime = 0;
                gemAudio.play();
                gemsCollected++;
                if (gemsCollected === gems.length) {
                    produceKey();
                }
            }
        }
		//collision with key
        for (var i = 0; i < myKey.length; i++) {
            var thisKey = myKey[i];

            if (hitTestCircle(dave, thisKey) && thisKey.visible) {
                gemAudio.play();
                thisKey.visible = false;
                dave.sourceY = 64;
                produceDoor();
            }
        }
		//collision with door
        for (var i = 0; i < myDoor.length; i++) {
            var thisDoor = myDoor[i];


            if (hitTestCircle(dave, thisDoor)) {
                backgroundAudio.pause();
                dave.x = myDoor[0].x;
                dave.y = myDoor[0].y;
                myDoor[0].visible = false;
                var floor = Object.create(spriteObject);
                floor.sourceX = 0;
                floor.sourceY = 0;
                floor.x = myDoor[0].x;
                floor.y = myDoor[0].y;
                sprites.push(floor);


                win = true;
                winAudio.play();
                gameState = OVER;
            }
        }
        //Display the gameTimer
        timerMessage.text = gameTimer.time;

        //Check whether the time is over
        if (gameTimer.time === 0) {
            failAudio.addEventListener("ended", function() {
                gameOverAudio.play();
                gameState = OVER;
            }, false); //plays more music after the end of the lose sound and set to gameover
            failAudio.play();
            gameTimer.stop();
        }
    }
	//the game has ended -display end screen
    function endGame() {
        gameTimer.stop();
        backgroundAudio.pause();//end music
		endPage.style.display = "block";
        canvas.style.display = "none";
		//set correct image display
        if (win === true) {
            gameOverScreen.style.backgroundImage = "url('../images/win.png')";
        } 
		else {
            gameOverScreen.style.backgroundImage = "url('../images/gameOver.png')";
        }
    }
	//updates animations
    function render() {
        drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

        //Display the sprites
        if (sprites.length !== 0) {
            for (var i = 0; i < sprites.length; i++) {
                var sprite = sprites[i];
                if (sprite.visible) {
                    drawingSurface.drawImage(
                        image,
                        sprite.sourceX, sprite.sourceY,
                        sprite.sourceWidth, sprite.sourceHeight,
                        Math.floor(sprite.x), Math.floor(sprite.y),
                        sprite.width, sprite.height
                    );
                }
            }
        }
		
		    if (messages.length !== 0) {
            for (var i = 0; i < messages.length; i++) {
                var message = messages[i];
                if (message.visible) {
                    drawingSurface.font = message.font;
                    drawingSurface.fillStyle = message.fillStyle;
                    drawingSurface.textBaseline = message.textBaseline;
                    drawingSurface.fillText(message.text, message.x, message.y);
                }
            }
        }
    }
};