Game = {
    // This defines our grid's size and the size of each of its tiles
    map_grid: {
        width: 28,
        height: 20,
        tile: {
            width: 32,
            height: 32
        },
        largeTileOverlay: {
            width: 64,
            height: 64
        }
    },

    // The total width of the game screen. Since our grid takes up the entire screen
    //  this is just the width of a tile times the width of the grid
    width: function() {
            return this.map_grid.width * this.map_grid.tile.width;
    },

    // The total height of the game screen. Since our grid takes up the entire screen
    //  this is just the height of a tile times the height of the grid
    height: function() {
            return this.map_grid.height * this.map_grid.tile.height;
    },

    wood: 0,

    // Initialize and start our game
    start: function() {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
        Crafty.stage.elem.style.background = "url(images/grass.png)";

        // Simply start the "Loading" scene to get things going

        Crafty.scene('Loading', function () {
            // Draw some text for the player to see in case the file
            //  takes a noticeable amount of time to load
            Crafty.e('2D, DOM, Text')
                .text('Loading; please wait...')
                .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
                .textFont($text_css);

            var large = {
                "audio": {
                    "background": ["Assets/Small_Sleepy_Town.mp3"],
                    "chop": ["Assets/chop.wav"],
                    "fire": ["Assets/fire.wav"]
                },
                "sprites": {
                    "images/LPC_forest/forest_tiles.png": {
                        "tile": 64,
                        "tileh": 64,
                        "map": { "spr_tree": [1, 3], "spr_tree2": [0, 5], "spr_single_tree": [0,3], "spr_single_tree2": [0,4],
                                 "spr_HutL": [7,1]},
                        "paddingX": 0,
                        "paddingY": 0,
                        "paddingAroundBorder": 0
                    }
                }
            };
            // Load our sprite map image
            Crafty.load(large, function () {
                Crafty.sprite(32, 64, "images/LPC_forest/forest_tiles.png", {
                    spr_treeR:[1,3],
                    spr_treeL2:[0,4],
                    spr_log: [14,0]
                });
                Crafty.sprite(64, 32, "images/LPC_forest/forest_tiles.png", {
                    spr_treeT: [0,6],
                    spr_treeT2: [0,8],
                    spr_treeB: [0,7],
                    spr_treeB2: [0,9]
                });
                //Crafty.sprite(64, 96, "images/LPC_forest/forest_tiles.png", {
                //    spr_pit: [3,0]
                //});
                Crafty.sprite(32,32, "images/LPC_forest/forest_tiles.png", {
                    spr_pitTL: [6,0],
                    spr_pitT: [7,0],
                    spr_pitL: [6,1],
                    spr_pitBL: [6,2],
                    spr_pitB: [7,2],
                    spr_pitM: [7,1],
                    spr_bonfire: [4,5]
                });
                Crafty.sprite(32,32, "images/LPC_forest/forest_tiles.png", {
                    spr_pitTL: [6,0],
                    spr_pitT: [7,0],
                    spr_pitL: [6,1],
                    spr_pitBL: [6,2],
                    spr_pitB: [7,2],
                    spr_pitM: [7,1],
                    spr_logL: [11,2],
                    spr_logR: [12,2],
                    spr_rock: [11,1],
                    spr_rock2: [12,1]
                });
                Crafty.sprite(32,32, "images/king.png", {
                    spr_kingL1: [0, 1]
                });
                Crafty.sprite(32,32, "images/builder.png", {
                    spr_builderL: [1, 3],
                    spr_builderD: [1, 0]
                });
                Crafty.sprite(96,96, "images/kingPortrait.png", {
                    spr_king_down_closed: [0,1],
                    spr_king_down_closed2: [1,1],
                    spr_king_down_open: [0,0],
                    spr_king_determined_open: [3,1],
                    spr_king_guard_open: [2,0],
                    spr_king_tricky_open: [2,1],
                    spr_king_unsure_open: [0,0]
                });
                Crafty.sprite(96,96, "images/builderPortrait.png", {
                    spr_builder_down_closed: [0,1],
                    spr_builder_down_closed2: [1,1],
                    spr_builder_down_open: [0,0],
                    spr_builder_okay_open: [1,0],
                    spr_builder_guard_open: [3,0],
                    spr_builder_tricky_open: [2,1],
                    spr_builder_unsure_open: [0,0]
                });
                Crafty.sprite(32,32, "images/soldier.png", {
                    spr_soldierU: [1,3],
                    spr_soldierD: [1,0]
                });
                Crafty.sprite(32,32, "images/citizen.png", {
                    spr_citizenU: [1,3],
                    spr_citizenD: [1,0]
                })
                Crafty.scene('Game');
            });
        });
        Crafty.scene('Loading');
    }
};

$text_css = { 'size': '24px', 'family': 'Arial', 'color': 'red', 'text-align': 'center' };