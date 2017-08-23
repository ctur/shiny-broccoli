//JSin xD


(function () {


    // 43

    var dict = { alice: 34, bob: 24, chris: 62 };
    var people = [];

    for (var name in dict) {
        people.push(name + ": " + dict[name]);
    }
    console.log(people);

    function NaiveDict() { }

    NaiveDict.prototype.count = function () {
        var i = 0;
        for (var name in this) { // counts every property
            i++;
        }
        return i;
    };

    NaiveDict.prototype.toString = function () {
        return "[object NaiveDict]";
    };

    var dict = new NaiveDict();

    dict.alice = 34;
    dict.bob = 24;
    dict.chris = 62;

    console.log(dict.toString);
    console.log(dict.count);

    //var dict = new Array();
    var dict = {};

    dict.alice = 34;
    dict.bob = 24;
    dict.chris = 62;

    console.log(dict);

    Array.prototype.first = function () {
        return this[0];
    };

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    var names = [];
    for (var name in dict) {
        names.push(name);
    }

    console.log(names);

    // 44
    function C() { };
    C.prototype = null;

    var o = new C();
    Object.getPrototypeOf(o) === null;              // false
    Object.getPrototypeOf(o) === Object.prototype;  // true

    var x = Object.create(null); // -> most reliable for creating object
    Object.getPrototypeOf(x) === null;              // true


    var x = { __proto__: null };
    console.log(x instanceof Object);               // false

    // 45
    
    console.log("\n\n         " + 45);
    console.log( "alice" in dict);
    console.log(dict.alice);
    dict.alice = 24;

    var dict = {};

    "alice" in dict;
    "bob" in dict;
    "chris" in dict;
    "toString" in dict;
    "valueOf" in dict;

    //var hasOwn = Object.prototype.hasOwnProperty;
    // or better:
    var hasOwn = {}.hasOwnProperty;

    console.log(hasOwn.call(dict, "alice"));

    function Dict(elements) {
        // allow an optional initial table
        this.elements = elements || {}; // simple object
    }

    Dict.prototype.has = function (key) {
        // own property only
        return {}.hasOwnProperty.call(this.elements, key);
    };

    Dict.prototype.get = function (key) {
        // own property only 
        return this.has(key)
                ? this.elements[key]
                : undefined;
    };

    Dict.prototype.set = function (key, val) {
        this.elements[key] = val;
    };

    Dict.prototype.remove = function (key) {
        delete this.elements[key];
    };

    // Maximum portability version
    function Dict(elements) {
        // allow an optional initial table
        this.elements = elements || {}; // Simple object
        this.hasSpecialProto = false; //has "__proto__" key?
        this.specialProto = undefined; // "__proto__" element
    };

    Dict.prototype.has = function (key) {
        if (key === "__proto__") {
            return this.hasSpecialProto;
        }
        // own property only
        return {}.hasOwnProperty.call(this.elements, key);
    };

    Dict.prototype.get = function (key) {
        if (key === "__proto__") {
            return this.specialProto;
        }

        // own property only
        return this.has(key)
                ? this.elements[key]
                : undefined;
    };

    Dict.prototype.set = function (key, val) {
        if (key === "__proto__") {
            this.hasSpecialProto = true;
            this.specialProto = val;
        } else {
            this.elements[key] = val;
        }
    };

    Dict.prototype.remove = function (key) {
        if (key === "__proto__") {
            this.hasSpecialProto = false;
            this.specialProto = undefined;
        } else {
            delete this.elements[key];
        }
    };

    var dict = new Dict();
    console.log(dict.has("__proto__"));


    //      46
    console.log("\n\n         " + 46);

    function report(highScores) {
        var result = "";
        for (var i = 0, n = highScores.length; i < n; i++) {
            var score = highScores[i];
            result += (i + 1) + ". " +
                       score.name + ": " + score.points + "\n";
        }
        return result;
    };

    // order is precise on array objects
    console.log(report([
        { name: "Hank ", points:   1110100 },
        { name: "Steve", points: 1064500 },
        { name: "Billy", points: 1050200}
    ]));

    //      47
    console.log("\n\n         " + 47);



})();
