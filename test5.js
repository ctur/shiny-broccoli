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



})();
