
(function () {
    //      47
    console.log("\n\n         " + 47);

    function allKey(obj) {
        var result = [];
        for (var key in obj) {
            result.push(key);
        };
        return result;
    };

    //Object.prototype.allkeys = function () {
    //    var result = [];
    //    for (var key in this) {
    //        result.push(key);
    //    };
    //    return result;
    //};

   

    console.log(allKey({ a: 1, b: 2, c: 3 }));
    //["a", "b", "c", "allkeys"] --> why showing all keys??
    //console.log(({ a: 1, b: 2, c: 3 }).allkeys()); 
    //["a", "b", "c", "allkeys"] --> again xD!

    Object.defineProperty(Object.prototype, "allKeys", {
        value: function () {
            var result = [];
            for (var key in this) {
                result.push(key);
            }
            return result;
        },
        writable: true,
        enumerable: false,
        configurable: true
    });

    console.log(({ a: 1, b: 2, c: 3 }).allKeys());

    // 48
    
})();
