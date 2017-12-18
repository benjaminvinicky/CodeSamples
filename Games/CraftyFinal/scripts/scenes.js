// Game scene
// -------------
// Runs the core gameplay loop
Crafty.scene('Game', function () {
//note: Some of the following I just made up weird conditions because I didn't want to decide on my own or use random.
    // Player character, placed at 5, 5 on our grid
    var King = this.player = Crafty.e('PlayerCharacter').attr(5, 5);
    //Place a tree at every edge square on our grid of 16x16 tiles
    for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++) {
            var at_edge = x === 0 && y % 2 === 0 ||
                y === 0 && x < Game.map_grid.width / 2 && x % 2 === 0 ||
                y === Game.map_grid.height - 2 && x < Game.map_grid.width / 2 - 4 && x % 2 === 0;
            var at_edge2 = y === 0 && x > Game.map_grid.width / 2 + 1 && x % 2 === 0 ||
                y === Game.map_grid.height - 2 && x > Game.map_grid.width / 2 + 5 && x % 2 === 0 ||
                x === Game.map_grid.width - 2 && y < Game.map_grid.height / 2 - 3 && y % 2 === 0 ||
                x === Game.map_grid.width - 2 && y > Game.map_grid.height / 2 + 3 && y % 2 === 0;
            var pit = x === Game.map_grid.width - 3 && y === Game.map_grid.height / 2 - 2 && y % 2 === 0;
            var tree = x === 3 && y % 7 === 0 || x === 3 && y % 9 === 0 || x === 2 && y % 6 === 0 || x === 2 && y === Game.map_grid.height - 4 ||
                x === 8 && y === 5 || x === 7 && y === 15 || x === 9 && y === 13 || x === 9 && y === 10 || x === 6 && y === 12 || x === 15 && y === 11;
            var tree2 = x === Game.map_grid.width - 6 && y % 7 === 0 || x === Game.map_grid.width - 6 && y % 12 === 0 || x === Game.map_grid.width - 3 && y % 6 === 0 ||
                x === Game.map_grid.width - 5 && y === Game.map_grid.height - 4 ||
                x === Game.map_grid.width - 10 && y === 5 || x === Game.map_grid.width - 11 && y === 13 ||
                x === Game.map_grid.width - 13 && y === 3 || x === Game.map_grid.width - 11 && y === 17;
            var rock = x === Game.map_grid.width - 2 && y % 9 === 0 || x === Game.map_grid.width - 9 && y % 8 === 0 || x === Game.map_grid.width - 5 && y % 4 === 0 ||
                x < 13 && x % 6 === 1 && y % 3 === 0 && y % 7 === 1;
            var rock2 = x === Game.map_grid.width - 18 && y % 7 === 0 || x === Game.map_grid.width - 18 && y % 12 === 0 || x === Game.map_grid.width - 12 && y % 6 === 0

            if (at_edge && !at_edge2) {
                // Place a tree entity at the current tile
                Crafty.e('Solid, Tree').at(x, y);
                if (x === 0 && y > 1 && y < Game.map_grid.height && y % 2 === 0) {
                    Crafty.e('Solid, Tree_right').at(x + 2, y);
                }
                if (y === Game.map_grid.height - 2 && x > 1 && x < Game.map_grid.width / 2 - 4 && x % 2 === 0) {
                    Crafty.e('Solid, Tree_top').at(x, y - 1);
                }
                if (y === 0 && x < Game.map_grid.width / 2 && x > 1 && x % 2 === 0) {
                    Crafty.e('Solid, Tree_bottom').at(x, y + 2);
                }
                if (y === 0 && x < Game.map_grid.width / 2 + 4 && x > Game.map_grid.width / 2 - 4 && x % 2 === 0) {
                    Crafty.e('Solid, Tree_right').at(x + 2, y);
                }
                if (y === Game.map_grid.height - 2 && x < Game.map_grid.width / 2 - 4 && x > Game.map_grid.width / 2 - 8 && x % 2 === 0) {
                    Crafty.e('Solid, Tree_right').at(x + 2, y);
                }
//                this.occupied[x][y] = true;
            }
            else if (at_edge2) {
                Crafty.e('Solid, Tree2').at(x, y);
                if (x === Game.map_grid.width - 2 && y !== 0 && y !== Game.map_grid.height - 2) {
                    Crafty.e('Solid, Tree2_left').at(x - 1, y);
                }
                if (y === 0 && x !== Game.map_grid.width - 2 ||
                    y < Game.map_grid.height / 2 - 3) {
                    Crafty.e('Solid, Tree2_bottom').at(x, y + 2)
                }
                if (y === 0 && x > Game.map_grid.width / 2 && x < Game.map_grid.width / 2 + 4 ||
                    y === Game.map_grid.height - 2 && x < Game.map_grid.width / 2 + 8) {
                    Crafty.e('Solid, Tree2_left').at(x - 1, y);
                }
                if (y === Game.map_grid.height - 2 && x !== Game.map_grid.width - 2 ||
                    x === Game.map_grid.width - 2 && y === Game.map_grid.height / 2 + 4) {
                    Crafty.e('Solid, Tree2_top').at(x, y - 1);
                }
            }
            else if (pit) {
                Crafty.e('Solid, Pit_topL').at(x, y + 1);
                Crafty.e('Solid, Pit_top').at(x + 1, y + 1);
                Crafty.e('Solid, Pit_top').at(x + 2, y + 1);
                Crafty.e('Solid, Pit_top').at(x + 3, y + 1);
                Crafty.e('Solid, Pit_left').at(x, y + 2);
                Crafty.e('Solid, Pit_left').at(x, y + 3);
                Crafty.e('Solid, Pit_left').at(x, y + 4);
                Crafty.e('Solid, Pit_bottomL').at(x, y + 5);
                Crafty.e('Solid, Pit_bottom').at(x + 1, y + 5);
                Crafty.e('Solid, Pit_bottom').at(x + 2, y + 5);
                Crafty.e('Solid, Pit_bottom').at(x + 3, y + 5);
                Crafty.e('Pit_middle').at(x + 1, y + 2);
                Crafty.e('Pit_middle').at(x + 1, y + 3);
                Crafty.e('Pit_middle').at(x + 1, y + 4);
                Crafty.e('Pit_middle').at(x + 2, y + 2);
                Crafty.e('Pit_middle').at(x + 2, y + 3);
                Crafty.e('Pit_middle').at(x + 2, y + 4);
            }
            else if (x === Game.map_grid.width / 2 - 1 && y === Game.map_grid.height / 2 - 1) {
                var bonfire = Crafty.e('Solid, Bonfire').at(x, y);
                Crafty.e('PlayerCharacter').at(x + 1, y);
            }
            else if (tree) {
                Crafty.e('Solid, Tree_s').at(x, y);
            }
            else if (tree2) {
                Crafty.e('Solid, Tree_s2').at(x, y);
            }
            else if (x === 13 && y === Game.map_grid.height - 5) {
                Crafty.e('LogV').at(x + 7, y - 6);
                Crafty.e('LogV').at(x - 8, y);
            }
            else if (rock) {
                Crafty.e('Rock').at(x + 5, y - 1);
            }
            else if (rock2 || x === 4 && y % 5 === 0) {
                Crafty.e('Rock2').at(x + 6, y - 4);
            }
            Crafty.audio.play("background", -1, .2);
        }
    }
    var shelters = 0;
    var wood = 0;
    var stone = 0;
    var capacity = 1 + shelters * 6;
    var idlePopulation = 0;
    var soldiers = 0;
    var totalPopulation = soldiers + idlePopulation + 1;
    var costs = {
        wood: 20 + soldiers * 5,
        stone: 10 + soldiers * 7,
        hut: 200 + 50 * shelters
    };
    var strength = soldiers * 50 + totalPopulation - idlePopulation * 10 + stone + wood;
    var lit = false;
    var kingBox = Crafty.e('King').at(0, Game.map_grid.height - 3);
    var storyBox = Crafty.e('2D, DOM, Text, Color')
        .text(introTexts.Intro1)
        .attr({x: 96, y: Game.height() - 96, w: 400, h: 96})
        .textFont($text_css)
        .css({"border": "2px solid silver"})
        .css({"background-color": "rgba(200,200,200,.5"})
        .css({"padding": "15px"})
        .css({"font-family": "MedusaGothic"});
    var gameTimer = {
        time: 10,
        interval: undefined,
        start: function () {
            var self = this;
            this.interval = setInterval(function () {
                self.tick();
            }, 1000);
        },
        stop: function () {
            clearInterval(this.interval);
        },
        tick: function () {
            this.time--;
            Timer.text("Time Left: " + this.time);
            if (this.time <= 1) {
                stop();
                this.time = 0;
                Timer.text("Time Left: " + this.time);
                $('#game').fadeOut(4000, function () {
                    Crafty.audio.pause("background");
                    Crafty.scene("End", strength);
                });
            }
        }
    };
    var Timer;
    var resourceBox = Crafty.e('2D, DOM, Text, Color')
        .text('Wood: ' + wood + ' &nbsp;&nbsp;&nbsp;&nbsp;Stone: ' + stone
            + ' &nbsp;&nbsp;&nbsp;&nbsp;Population: ' + totalPopulation + ' &nbsp;&nbsp;&nbsp;&nbsp;Capacity: '
            + capacity + " &nbsp;&nbsp;&nbsp;&nbsp;Soldiers: " + soldiers + " &nbsp;&nbsp;&nbsp;&nbsp;Strength: "
            + strength)
        .attr({x: 0, y: 0, w: Game.width(), h: 30})
        .textFont($text_css)
        .css({"border": "2px solid silver"})
        .css({"background-color": "rgba(200,200,200,.5"})
        .css({"padding": "14px"})
        .css({"padding-left": "20px"})
        .css({"font-family": "MedusaGothic"});

    setTimeout(function () {
        delay = false;
        storyBox.text(introTexts.Intro2);
        kingBox.removeComponent('spr_king_down_closed');
        kingBox.addComponent('spr_king_down_open');
        setTimeout(function () {
            delay = false;
            storyBox.text(introTexts.Intro3);
            kingBox.removeComponent('spr_king_down_open');
            kingBox.addComponent('spr_king_unsure_open');
            setTimeout(function () {
                delay = false;
                if (wood === 0) {
                    storyBox.text(introTexts.Intro4);
                    kingBox.removeComponent('spr_king_unsure_open');
                    kingBox.addComponent('spr_king_okay_open');
                }
                else {
                    kingBox.removeComponent('spr_king_unsure_open');
                    kingBox.addComponent('spr_king_okay_open');
                }
            }, 4000);
        }, 4000);
    }, 4000);

    Crafty.bind("PickupWood", function () {
        wood += 25;
        Crafty.trigger("UpdateStats");
    });

    var builderEnter;
    Crafty.one("FinallyLightIt", function () {
        Crafty.e('BonfireLit').at(Game.map_grid.width / 2 - 1, Game.map_grid.height / 2 - 1);
        bonfire.destroy();
        lit = true;
        Crafty.audio.play("fire", -1, 0.7);
        wood -= 50;
        Crafty.trigger("UpdateStats");
        storyBox.text(introTexts.Intro6);
        kingBox.removeComponent('spr_king_okay_open');
        kingBox.addComponent('spr_king_tricky_open');
        setTimeout(function () {
            builderEnter = Crafty.e('BuilderEnter').at(Game.map_grid.width / 2 - 3, Game.map_grid.height + 1);
        }, 4000);
    });

    Crafty.bind("BonfireLight", function () {
        if (bonfire && wood >= 50)
            Crafty.trigger("FinallyLightIt");
        else if (!lit && wood < 50) {
            storyBox.text("I don't have enough wood");
            setTimeout(function () {
                delay = false;
                storyBox.text("");
            }, 4000);
        }
    });
    //Conversation and the creation of the "Builder NPC"
    Crafty.bind("TheBuilder", function () {
        var Builder = Crafty.e("Builder").at(11, 6)
        builderEnter.destroy();
        kingBox.removeComponent('spr_king_tricky_open');
        kingBox.addComponent('spr_builder_down_closed');
        storyBox.text(builderTexts.Builder1);
        setTimeout(function () {
            storyBox.text(builderTexts.Builder2)
        }, 4000);
        setTimeout(function () {
            kingBox.removeComponent('spr_builder_down_closed');
            kingBox.addComponent('spr_builder_down_closed2');
            storyBox.text(builderTexts.Builder3)
        }, 8000);
        setTimeout(function () {
            kingBox.removeComponent('spr_builder_down_closed2');
            kingBox.addComponent('spr_builder_okay_open');
            storyBox.text(builderTexts.Builder4)
        }, 12000);
        setTimeout(function () {
            kingBox.removeComponent('spr_builder_okay_open');
            kingBox.addComponent('spr_king_down_closed2');
            storyBox.text(builderTexts.King1)
        }, 16000);
        setTimeout(function () {
            storyBox.text(builderTexts.Builder5);
            kingBox.removeComponent('spr_king_down_closed2');
            kingBox.addComponent('spr_builder_guard_open');
        }, 20000);
        setTimeout(function () {
            storyBox.text(builderTexts.Builder6);
            kingBox.removeComponent('spr_builder_guard_open');
            kingBox.addComponent('spr_builder_tricky_open');
            King.trigger("NowHasAxe");
            King.hasAxe = true;
        }, 24000);
        setTimeout(function () {
            storyBox.text(builderTexts.King2);
            kingBox.removeComponent('spr_builder_tricky_open');
            kingBox.addComponent('spr_king_determined_open');
            alert("You now have the axe. Go cut some trees!");
        }, 28000);
    });
    Crafty.bind("UpdateStats", function () {
        //display the values
        if (wood === 50 && bonfire)
            storyBox.text(introTexts.Intro5);

        resourceBox.text('Wood: ' + wood + ' &nbsp;&nbsp;&nbsp;&nbsp;Stone: ' + stone
            + ' &nbsp;&nbsp;&nbsp;&nbsp;Population: ' + totalPopulation + ' &nbsp;&nbsp;&nbsp;&nbsp;Capacity: '
            + capacity + " &nbsp;&nbsp;&nbsp;&nbsp;Soldiers: " + soldiers + " &nbsp;&nbsp;&nbsp;&nbsp;Strength: "
            + strength);
    });

    Crafty.one("BuilderHut", function () {
        setTimeout(function () {
            storyBox.text(builderTexts.Builder7);
        }, 200);
        kingBox.removeComponent('spr_king_determined_open');
        kingBox.addComponent('spr_builder_tricky_open');
    });
    Crafty.bind("CheckBuilderEvent", function () {
        if (shelters === 0 && wood >= 2000) {
            Crafty.trigger("BuildTheHut");
            alert("You have been tools to cut stone!");
        }
        else if (shelters > 0 && King.hasTools && stone === 250) {
            Crafty.trigger("SoldiersHut");
        }
        else if (shelters >0 && King.hasTools && stone < 250) {
            storyBox.text("I have the tools. I just need the stone");
        }
        else {
            storyBox.text("I need more wood")
        }
    });
    Crafty.one("BuildTheHut", function () {
        Crafty.e('Hut').at(8, 6);
        wood -= 2000;
        shelters++;
        Crafty.trigger("UpdateStats");
        storyBox.text("Here are the tools to shape those stones. Break them all, and come back.");
        kingBox.removeComponent('spr_king_determined_open');
        kingBox.addComponent('spr_builder_tricky_open');
        King.hasTools = true;
        setTimeout(function () {
            storyBox.text(builderTexts.King2);
            kingBox.removeComponent('spr_builder_tricky_open');
            kingBox.addComponent('spr_king_determined_open');
        }, 4000);
    });
    Crafty.one("SoldiersHut", function () {
        Crafty.e('HutS').at(19, 6);
        Crafty.trigger("TheFallenAreComing!");
    })
    var citizen1;
    var citizen2;
    var citizen3;
    var soldier1;
    var soldier2;
    var soldier3;

    Crafty.one("TheFallenAreComing!", function () {
        setTimeout(function () {
            citizen1 = Crafty.e("Citizen_Enter").at(Game.map_grid.width / 2 - 3, Game.map_grid.height + 2);
            soldier1 = Crafty.e("Soldier_Enter").at(Game.map_grid.width / 2 + 2, Game.map_grid.height + 2);
        }, 1000);
        setTimeout(function () {
            citizen2 = Crafty.e("Citizen_Enter").at(Game.map_grid.width / 2 - 3, Game.map_grid.height + 2);
            soldier2 = Crafty.e("Soldier_Enter").at(Game.map_grid.width / 2 + 2, Game.map_grid.height + 2);
        }, 2000);
        setTimeout(function () {
            citizen3 = Crafty.e("Citizen_Enter").at(Game.map_grid.width / 2 - 3, Game.map_grid.height + 2);
            soldier3 = Crafty.e("Soldier_Enter").at(Game.map_grid.width / 2 + 2, Game.map_grid.height + 2);
        }, 3000);
        setTimeout(function () {
            $("#game").fadeOut(5000, function () {
                citizen1.destroy();
                citizen2.destroy();
                citizen3.destroy();
                soldier1.destroy();
                soldier2.destroy();
                soldier3.destroy();
                Crafty.e("Citizen").at(Game.map_grid.width / 2 - 6, Game.map_grid.height - 8);
                Crafty.e("Citizen").at(Game.map_grid.width / 2 - 5, Game.map_grid.height - 9);
                Crafty.e("Citizen").at(Game.map_grid.width / 2 - 4, Game.map_grid.height - 8);
                Crafty.e("Soldier").at(Game.map_grid.width / 2 - 1, Game.map_grid.height / 2 + 2);
                Crafty.e("Soldier").at(Game.map_grid.width / 2, Game.map_grid.height / 2 + 2);
                Crafty.e("Soldier").at(Game.map_grid.width / 2 + 1, Game.map_grid.height / 2 + 2);
                Timer = Crafty.e('2D, DOM, Text, Color')
                    .text("Fallen Invasion in: " + gameTimer.time)
                    .attr({x: Game.width() / 2 - 100, y: 100, w: 150, h: 48})
                    .textFont($text_css)
                    .css({"border": "2px solid silver"})
                    .css({"background-color": "rgba(200,50,50,.8"})
                    .css({"padding": "15px"})
                    .css({"font-family": "MedusaGothic"});
                gameTimer.start();
                $("#game").fadeIn(5000);
            });
        }, 1100);
    });


    Crafty.bind("BreakRock", function (hitData) {
        if (King.hasTools) {
            stone += 25;
            hitData.obj.destroy();
            Crafty.trigger("UpdateStats");
        }
    });

    Crafty.bind("CreateSoldier", function () {
        if (idlePopulation > 0 && wood >= costs.wood && stone >= costs.stone) {
            idlePopulation--;
            soldiers++;
            wood -= costs.wood;
            stone -= costs.stone;
            Crafty.trigger("UpdateStats");
        }
        else {
            storyBox.text("I can't do that...")
        }
    });
    Crafty.bind("TreeDown", function (hitData) {
        if (King.hasAxe) {
            Crafty.audio.play("chop", 2, 0.6);
            wood += 100;
            hitData.obj.destroy();
            Crafty.trigger("UpdateStats");
        }
    });
});

Crafty.scene("End", function(strength) {
    Crafty.background('url(images/open.jpg');
    var a = document.getElementById("hideme");
    a.play();
    $("#startContainer").show();
    $("#gameTitle").show();
    $('#GameOver').text("GAMEOVER");
    $('#GameOverText').text("End Strength: " + strength);
    $('#game').fadeIn(6000, function() {
        console.log("YOU DID IT!");
    });
});
