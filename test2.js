// JS practice

(function () {
    var table = {
        entries: [],
        addEntry: function (key, value) {
            this.entries.push({ key : key, value: value});
        },
        forEach: function (f, thisArg) {
            var entries = this.entries;

            for (var i = 0, n = entries.length; i < n; i++) {
                var entry = entries[i];
                f.call(thisArg, entry.key, entry.value, i);
            }
        }
    };

    var c3 = {
        name: 'c',
        printName: function () {
            console.log(this.name);
        }

    };

    var d3 = {
        name: 'd'
    };

    function a(){
        console.log(this.name);
    };

    c3.printName.call(d3);

    var buffer = {
        state: [],
        append: function () {
            for (var i = 0, n = arguments.length; i < n; i++) {
                this.state.push(arguments[i]);
            }
        }
    };

    buffer.append("hello");
    buffer.append.apply(buffer, ['a', 'b']);
    console.log(buffer.state);

    function averageOfArray(a) {
        for (var i = 0, sum = 0, n = a.length; i < n; i++){
            sum += a[i];
        };
        return sum / n;
    }
    console.log(averageOfArray([3, 7, 5, 2, 3, 9, 7, 6, 5]));

    function average() {
        var args = [].slice.call(arguments);
        console.log('arrrgs: ' + args);
        var shift = [].shift;
        for (var i = 0, sum = 0, n = arguments.length;
                i < n;
                i++) {
          
            sum += arguments[i];
            shift.call(arguments);
            console.log(arguments);
        }
        
        return sum / n;

    };

    console.log(average.apply(this, [3, 2, 1, 4]));

    // Never modify arguments

    // * The slice method of arrays makes a copy of an array when
    // called without additional arguments. -> var args = [].slice.call(arguments);

    function callMethod(obj, method) {
        var args = [].slice.call(arguments, 2);
        return obj[method].apply(obj, args);
    }

    var obj = {
        add: function (x, y) { return x + y; }
    };

    console.log(callMethod(obj, "add", 17, 25)); // 42

    var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    function values() {
        var i = 0, n = arguments.length, a = arguments;
        return {
            hasNext: function () {
                return i < n;
            },
            next: function () {
                if (i >= n) {
                    throw new Error("end of iteration");
                }
                return a[i++]; // wrong arguments
            }
        }

    };

    var buffer = {
        entries: [],
        add: function (s) {
            this.entries.push(s);
        },
        concat: function () {
            return this.entries.join("");
        }
    };//buffer variable

    // var source = ["867", "-", "5309"];
    // this throws error because global object has not 'entries' property.
    //source.forEach(buffer.add);

    //var source = ["867", "-", "5309"];
    //source.forEach(buffer.add, buffer);
    //buffer.join();

    //var source = ["867", "-", "5309"];
    //source.forEach(function () {
    //    buffer.add(s);
    //});
    //buffer.join();

    //var source = ["867", "-", "5309"];
    //source.forEach(buffer.add.bind(buffer));
    //buffer.join();

            //function simpleURL(protocol, domain, path) {
            //    return protocol + "://" + domain + "/" + path;
            //};

            //var urls = paths.map(function (path) {
            //    return simpleURL("http", siteDomain, path);
            //});

            //var urls = paths.map(simpleURL.bind(null, "http", siteDomain));


            //function repeat(n, action) {
            //    for (var i = 0; i < n; i++){
            //        eval(action);        
            //    };
            //};

    // Benchmark of a function
    //var start = [], end = [], timings = [];
    //repeat(1000,
    //        "start.push(Date.now()); f(); end.push(Date.now());");
    //for (var i = 0, n = start.length; i < n; i++) {
    //    timings[i] = end[i] - start[i];
    //};

    //function benchmark() {
    //    var start = [], end = [], timings = [];
    //    repeat(1000,
    //        "start.push(Date.now()); f(); end.push(Date.now());");
    //    for (var i = 0, n = start.length; i < n ; i++) {
    //        timings[i] = end[i] - start[i];
    //    };

    //    return timings;
    //};

    function repeat(n, action) {
        for (var i = 0; i < n; i++) {
            action();
        }
    };

    function f() { console.log(" " )};

    function benchmark() {
        var start = [], end = [], timings = [];
        repeat(1000, function () {
            start.push(Date.now());
            f();
            end.push(Date.now());
        });

        for (var i = 0, n = start.length; i < n; i++) {
            timings[i] = end[i] - start[i];
        }

        return timings;
    };

    console.log(benchmark());



    
    
    
})();
