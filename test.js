(function f(x) {

    function f() {
        "use strict";
        //var arguments = [];
    }


})();

(function f(x) {

    function f() {
        var arguments = [];
    }


})();


(function d() {

    console.log((8).toString(4)); // 1000
    console.log(0.1 + 0.2); //> 0.30000000000000004 ????
    console.log((0.2) + (0.1));
    console.log("(0.1 + 0.2) + 0.3 === 0.1 + (0.2 + 0.3) ?");
    console.log((0.1 + 0.2) + 0.3 === 0.1 + (0.2 + 0.3));
    console.log("(0.1 + 0.2) + 0.3 == 0.1 + (0.2 + 0.3) ?");
    console.log((0.1 + 0.2) + 0.3 == 0.1 + (0.2 + 0.3));
    console.log((0.1 + 0.2) + 0.3);
    console.log(0.1 + (0.2 + 0.3));

    console.log(3 + true);

    console.log(isNaN(NaN));
    // NaN is the only JavaScript value that is treated as unequal to itself
    console.log(NaN !== NaN);
    console.log("4".valueOf());

    var s1 = new String("hello");
    var s2 = new String("hello");
    var a = "hello";
    console.log(s1);
    console.log(s1 + "s1 === s2 " + s1 === s2);
    console.log("s1 == s2 " + s1 == s2);

    console.log("hello".toUpperCase());

    console.log("1.0e0" == { valueOf: function () { return true; } }); // true

    // prints last element of the array
    //my_array.slice(-1)[0];

    var b;
    (function wrapElements(a) {
        var a = a | [10, 20, 30, 40, 50];
        var result = [];
        for (var i = 0, n = a.length; i < n; i++){

            (function() {
                var j = i;
                result[i] = function () { return a[j]; };
            })();
        }
        console.log(result);
        return result;
        b = result;
    })();

    //var wrapped = wrapElements([10, 20, 30, 40, 50]);

    //console.log(b);

    // Function expressions
    var f = function find(tree, key) {
        if (!tree) {
            return null;
        }

        if (tree.key === key) {
            return tree.value;
        }

        return find(tree.left, key) ||
               find(tree.right, key);
    };

    // same expression
    var f = function (tree, key) {
        if (!tree) {
            return null;
        }

        if (tree.key === value) {
            return tree.value;
        }

        return f(tree.left, key) ||
               f(tree.right, key);
    };

    //Consider avoiding named function 
    //expressions or removing 
    //them before shipping

    var y = "global";
    function test(x) {
        if (x) {
            eval("var y = 'local'; "); // dynamic binding

        }
        return y;
    }
    console.log(test(true));
    console.log(test(false));

    var y = "global";
    function test(src) {
        // Explicit nested scope
        (function () { eval(src); })(); 
        return y;
    }

    console.log(test("var y = 'local';"));
    console.log(test("var z = 'local';"));

    var x = "global";
    function test() {
        var x = "local";
        return eval("x"); // direct eval
    };
    console.log("       direct 'eval' ");
    console.log(test());

   


})();// IIFE (iffy)

var x = "global";

(function () {
    //console.log("       indirect eval ");
    //var x = "globalss";
    //function test() {
    //    var x = "local";
    //    var f = eval;
    //    return f("x"); // indirect eval
    //}
    //console.log(test());

    // simple function call xD!
    function hello(username) {
        return "hello, " + username;
    }

    console.log(hello("Keyser Söze"));

    // "Methods in JavaScript are nothing more than object properties that happen to be functions."
    var obj = {
        hello: function () {
            return "hello, " + this.username;
        },
        username: "Hans Gruber"
    };
    console.log(obj.hello());

    var obj2 = {
        hello: obj.hello,
        username: "Boo Radley"
    };
    console.log(obj2.hello());

    // Constructor function
    //  for initializing the object
    function User(name, passwordHash) {
        this.name = name;
        this.passwordHash = passwordHash;
    }

    var u = new User("sfalken",
                     "8u8dsfa7sf7ewa87fa7saf");
    console.log(u.name);

    // Higher - order functions
    function compareNumbers(x, y) {
        if (x < y) {
            return -1;
        }

        if (x > y) {
            return 1;
        }
        return 0;

    }

    
    console.log([3, 1, 4, 1, 5, 9].sort(compareNumbers));

    console.log(
        [3, 1, 4, 1, 5, 9].sort(function(x, y){
            if(x < y){
                return -1;
            }
            if( x > y){
                return 1;
            }
            return 0;
        }));

    var names = ["Fred", "Wilma", "Pebbles"];
    var upper = [];
    for (var i = 0, n = names.length; i < n; i++)
    {
        upper[i] = names[i].toUpperCase();
    }
    console.log(upper); // ["FRED", "WILMA", "PEBBLES"]

    var name = ["Fred", "Wilma", "Pebbles"];
    var upper = names.map(function (name) {
        return name.toUpperCase();
    });
    console.log(upper);

    var aIndex = "a".charCodeAt(0);

    var alphabet = "";
    for (var i = 0; i < 26; i++) {
        alphabet += String.fromCharCode(aIndex + i);
        
    }
    console.log(aIndex);
    console.log(alphabet);

     //Displays 0 - 10000 characters by UTF - 16 code unit *
    for (var i = 0; i < 60000; i++) {
        var a = String.fromCharCode(i);
        console.log("Char code: " + i + " Character: " + a);
    }

    var digits = "";
    for (var i = 0; i < 10; i++) {
        digits += i;
    }
    console.log(digits);

    var random = "";

    for (var i = 0; i < 8; i++) {
        random += String.fromCharCode(Math.floor(Math.random() * 26)
                                        + aIndex);
    }

    console.log(random);

    // last 3 for loop building string
    // this buildString loop will be used for utility purposes

    function buildString(n, callback) {
        var result = "";
        for (var i = 0; i < n; i++) {
            result += callback(i);
        }
        return result;
    }

    var alphabet = buildString(26, function (i) {
        return String.fromCharCode(aIndex + i);
    });

    console.log(alphabet);

    var digits = buildString(10, function (i) {
        return i;
    });

    console.log(digits);

    var random = buildString(8, function (i) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
    });

    console.log(random);
})();




