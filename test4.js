//JSinxD

// 36
(function () {
    function Tree(x) {
        this.value = x;
        this.children = []; // instance state
    };

    Tree.prototype = {
        addChild: function (x) {
            this.children.push(x);
        }
    };

    var left = new Tree(2);
    left.addChild(1);
    left.addChild(3);

    var right = new Tree(6);
    right.addChild(5);
    right.addChild(7);

    var top = new Tree(4);
    top.addChild(left);
    top.addChild(right);

    console.log(top.children);

    // 37
    // CSV - Comma Separated values
    function CSVReader(separators) {
        this.separators = separators || [","];
        this.regexp =
            new RegExp(this.separators.map(function (sep) {
                return "\\" + sep[0];
            }).join("|"));
    }

    CSVReader.prototype.read = function (str) {
        var lines = str.trim().split(/\n/);
        console.log(lines);
        return lines.map(function (line) {
            return line.split(this.regexp);
        }, this); // forward out this-binding to callback
    };

    var reader = new CSVReader();
    console.log(reader.read("a,b,c\nd,e,f\n"));

    //  ->>> extra csv
    CSVReader.prototype.read = function (str) {
        var lines = str.trim().split(/\n/);
        //***//
        var self = this; // save a reference to outer this-binding
        //***//

        return lines.map(function (line) {
            return line.split(self.regexp); // use outer this
        });
    };

    var reader = new CSVReader();
    console.log(reader.read("a,b,c\nd,e,f\n"));

    // 38

    function Scene(context, width, height, images) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.images = images;
        this.actors = [];
    }

    Scene.prototype.register = function (actor) {
        this.actors.push(actor);
    };

    Scene.prototype.unregister = function (actor) {
        var i = this.actors.indexOf(actor);
        if (i >= 0) {
            this.actors.splice(i, 1);
        }
    };

    Scene.prototype.draw = function () {
        this.context.clearRect(0, 0, this.width, this.height);
        for (var a = this.actors, i = 0, n = a.length; i < n; i++) {
            a[i].draw();
        }
    };

    function Actor(scene, x, y) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.actorID = ++Actor.nextID;
        scene.register(this);
    };

    Actor.nextID = 0;

    function Alien(scene, x, y, direction, speed, strength) {
        Actor.call(this, scene, x, y);
        this.direction = direction;
        this.speed = speed;
        this.strength = strength;
        this.damage = 0;
        this.alienID = ++Alien.nextID;
    };

    Alien.nextID = 0;

    Actor.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        this.scene.draw();
    };

    Actor.prototype.exit = function () {
        this.scene.unregister(this);
        this.scene.draw();
    };

    Actor.prototype.draw = function () {
        var image = this.scene.image[this.type];
        this.scene.context.drawImage(image, this.x, this.y);
    };

    Actor.prototype.width = function () {
        return this.scene.images[this.type].width;
    };

    Actor.prototype.height = function () {
        return this.scene.images[this.type].height;
    };

    function SpaceShip(scene, x, y) {
        Actor.call(this, scene, x, y);
        this.points = 0;
    };

    SpaceShip.prototype = Object.create(Actor.prototype);

    SpaceShip.prototype.type = "spaceShip";

    SpaceShip.prototype.scorePoint = function () {
        this.points++;
    };

    SpaceShip.prototype.left = function () {
        this.moveTo(Math.max(this.x - 10, 0), this.y);
    };

    SpaceShip.prototype.right = function () {
        var maxWidth = this.scene.width - this.width();
        this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
    };
})();
