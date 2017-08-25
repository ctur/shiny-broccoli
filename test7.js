//JSing

(function () {
    // 51 Reuse generic array methods
    function Highlight() {
        [].forEach.call(arguments, function (widget) {
            widget.setBackground("yellow");
        });
    }

    var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
    var result = Array.prototype.map.call(arrayLike, function (s) {
        return s.toUpperCase();
    });
    console.log(result);

    var result = Array.prototype.map.call("abc", function (s) {
        return s.toUpperCase();
    });


})();
