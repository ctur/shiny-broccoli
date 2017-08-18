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


})();
