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


})();// IIFE (iffy)




