// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function () {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        });
    },
    // Locate this entity at the given position on the grid
    at: function (x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Game.map_grid.tile.width, y: this.y / Game.map_grid.tile.height };
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    }
});

Crafty.c('King', {
    init: function () {
        this.requires('Solid, Actor, spr_king_down_closed');
    }
});

Crafty.c('LogL', {
    init: function () {
        this.requires('Actor, spr_logL, Log')
    }
});

Crafty.c('LogR', {
    init: function () {
        this.requires('Actor, spr_logR, Log')
    }
});

Crafty.c('LogV', {
    init: function () {
        this.requires('Actor, spr_log, Log')
    }
});

Crafty.c('Log', {
    init: function () {
        this.requires('Solid, PickupWood')
    }
});

Crafty.c('PickupWood', {
    pickup: function() {
        Game.wood += 50;
    }
});


// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
    init: function () {
        this.requires('2D, Canvas, Grid');
    }
});

// A Tree is just an Actor with a certain sprite
Crafty.c('Tree', {
    init: function () {
        this.requires('Actor, Solid, spr_tree');
    }
});

Crafty.c('Tree2', {
    init: function () {
        this.requires('Actor, Solid, spr_tree2');
    }
});

Crafty.c('Bonfire', {
    init: function () {
        this.requires('Actor, Solid, spr_bonfire')
    }
});

Crafty.c('BonfireLit', {
    init: function () {
        var animation_speed = 500;
        this.requires('Bonfire, SpriteAnimation')
            .reel('burning', 400, 1, 5, 3);
        this.animate('burning', animation_speed, -1);
    }
});

Crafty.c('Tree_right', {
    init: function () {
        this.requires('Actor, Solid, spr_treeR');
    }
});

Crafty.c('Tree2_left', {
    init: function () {
        this.requires('Actor, Solid, spr_treeL2');
    }
});

Crafty.c('Tree_top', {
    init: function () {
        this.requires('Actor, Solid, spr_treeT');
    }
});

Crafty.c('Tree2_top', {
    init: function () {
        this.requires('Actor, Solid, spr_treeT2');
    }
});

Crafty.c('Tree_bottom', {
    init: function () {
        this.requires('Actor, Solid, spr_treeB');
    }
});

Crafty.c('Tree2_bottom', {
    init: function () {
        this.requires('Actor, Solid, spr_treeB2');
    }
});

Crafty.c('Pit_topL', {
    init: function () {
        this.requires('Actor, Solid, spr_pitTL');
    }
});

Crafty.c('Pit_top', {
    init: function () {
        this.requires('Actor, Solid, spr_pitT');
    }
});

Crafty.c('Pit_left', {
    init: function () {
        this.requires('Actor, Solid, spr_pitL');
    }
});

Crafty.c('Pit_middle', {
    init: function () {
        this.requires('Actor, spr_pitM');
    }
});

Crafty.c('Pit_bottomL', {
    init: function () {
        this.requires('Actor, Solid, spr_pitBL');
    }
});

Crafty.c('Pit_bottom', {
    init: function () {
        this.requires('Actor, Solid, spr_pitB');
    }
});

Crafty.c('Tree_s', {
    init: function () {
        this.requires('Actor, Solid, spr_single_tree');
    }
});

Crafty.c('Tree_s2', {
    init: function () {
        this.requires('Actor, Solid, spr_single_tree2');
    }
});

Crafty.c('Rock', {
    init: function () {
        this.requires('Actor, Solid, spr_rock, rock');
    }
});
Crafty.c('Rock2', {
    init: function () {
        this.requires('Actor, Solid, spr_rock2, rock');
    }
});
Crafty.c('HutS', {
    init: function() {
        this.requires('Actor, Solid, spr_HutL')
    }
});
Crafty.c('Hut', {
    init: function() {
        this.requires('Actor, Solid, spr_HutL')
    }
});
Crafty.c('rock', {
    //placeholder
});

// This is the player-c
// trolled character
Crafty.c('PlayerCharacter', {
    hasAxe: false,
    hasTools: false,
    interact: false,
    init: function () {

        this.requires('Actor, Fourway, Collision, spr_kingL1, SpriteAnimation')
            .fourway(150)
            .bind('Moved', function(evt) { // after player moved
                var hitDatas, hitData;
                if ((hitDatas = this.hit('spr_single_tree'))){
                    hitData = hitDatas[0];
                    if (this.interact) {
                        Crafty.trigger("TreeDown", hitData);
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('HutS'))){
                    if (this.interact) {
                        Crafty.trigger("CreateSoldier");
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('rock'))){
                    hitData = hitDatas[0];
                    if (this.interact) {
                        Crafty.trigger("BreakRock", hitData);
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('HutS'))){
                    if (this.interact) {
                        setTimeout(function () {
                            Crafty.trigger("CreateSoldier");
                        }, 200);
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('Builder'))){
                    if (this.interact) {
                        setTimeout(function () {
                            Crafty.trigger("CheckBuilderEvent");
                        }, 300);
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('spr_single_tree2'))){
                    hitData = hitDatas[0];
                    if (this.interact) {
                        Crafty.trigger("TreeDown", hitData);
                    }
                    this[evt.axis] = evt.oldValue;
                }
                if ((hitDatas = this.hit('Log'))) { // check for collision with walls
                    hitData = hitDatas[0]; // resolving collision for just one collider
                    if (this.interact) {
                        hitData.obj.destroy();
                        Crafty.trigger("PickupWood");
                    }
                    this[evt.axis] = evt.oldValue;
                }
                else if ((hitDatas = this.hit('Bonfire'))) { // check for collision with walls
                    hitData = hitDatas[0]; // resolving collision for just one collider
                    if (this.interact) {
                        Crafty.trigger("BonfireLight");
                    }
                    this[evt.axis] = evt.oldValue;
                }
                else if ((hitDatas = this.hit('BonfireLit'))) {
                    hitData = hitDatas[0]; // resolving collision for just one collider
                    this[evt.axis] = evt.oldValue;
                }
                else if ((hitDatas = this.hit('Solid'))) { // check for collision with walls
                    this[evt.axis] = evt.oldValue;
                }
            })
            .bind("KeyDown", function(evt) {
                if(evt.keyCode === Crafty.keys.SPACE){
                    this.interact = true;
                }
            })
            .bind("KeyUp", function(evt) {
                if(evt.keyCode === Crafty.keys.SPACE){
                    this.interact = false;
                }
            })
            .bind("NowHasAxe", function() {
                this.hasAxe = true;
                console.log("NowHasAxe has been called!");
            })
            .reel('PlayerMovingUp', 600, 0, 3, 3)
            .reel('PlayerMovingRight', 600, 0, 2, 3)
            .reel('PlayerMovingDown', 600, 0, 0, 3)
            .reel('PlayerMovingLeft', 600, 0, 1, 3);
        var animation_speed = 500;
        this.bind('NewDirection', function(data) {
            if (data.x > 0) {
                animation_speed = 800;
                this.animate('PlayerMovingRight', animation_speed, -1);
            } else if (data.x < 0) {
                animation_speed = 800;
                this.animate('PlayerMovingLeft', animation_speed, -1);
            } else if (data.y > 0) {
                animation_speed = 800;
                this.animate('PlayerMovingDown', animation_speed, -1);
            } else if (data.y < 0) {
                animation_speed = 800;
                this.animate('PlayerMovingUp', animation_speed, -1);
            } else {
                this.pauseAnimation();
            }
        });
    }
});

Crafty.c('BuilderEnter', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_builderL, SpriteAnimation')
            .reel('BuilderMovingUp', 600, 0, 3, 3)
            .bind('EnterFrame',function(){
                //Move the Enemy in game loop
                this.y -= this.speed;
            });
        var animation_speed = 500;
        this.animate('BuilderMovingUp', animation_speed, -1);
        setTimeout(function () { Crafty.trigger("TheBuilder");}, 9500);
    }
});

Crafty.c('Builder', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_builderD, Solid')
    }
});

Crafty.c('Citizen_Enter', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_citizenU, SpriteAnimation')
            .reel('CitizenMovingUp', 600, 0, 3, 3)
            .bind('EnterFrame',function(){
                //Move the Enemy in game loop
                this.y -= this.speed;
            });
        var animation_speed = 500;
        this.animate('CitizenMovingUp', animation_speed, -1);
        //setTimeout(function () { this.obj.destroy();}, 7500);
    }
});

Crafty.c('Citizen', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_citizenD, Solid')
    }
});

Crafty.c('Soldier_Enter', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_soldierU, SpriteAnimation')
            .reel('SoldierMovingUp', 600, 0, 3, 3)
            .bind('EnterFrame',function(){
                //Move the Enemy in game loop
                this.y -= this.speed;
            });
        var animation_speed = 500;
        this.animate('SoldierMovingUp', animation_speed, -1);
        //setTimeout(function () { this.obj.destroy();}, 7500);
    }
});

Crafty.c('Soldier', {
    speed: 1,
    init: function () {
        this.requires('Actor, spr_soldierD, Solid')
    }
});

