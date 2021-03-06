
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

    // Dict part from test5
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
    // EODict
    
    function Member(name) {
        this.name = name;
        this.friends = [];
    };

    var a = new Member("Alice"),
        b = new Member("Bob"),
        c = new Member("Carol"),
        d = new Member("Dieter"),
        e = new Member("Eli"),
        f = new Member("Fatima");

    a.friends.push(b);
    b.friends.push(c);
    c.friends.push(e);
    d.friends.push(b);
    e.friends.push(d, f);

    function WorkSet() {
        this.entries = new Dict();
        this.count = 0;
    };

    WorkSet.prototype.isEmpty = function () {
        return this.count === 0;
    };

    WorkSet.prototype.add = function (key, val) {
        if (this.entries.has(key)) {
            return;
        }

        this.entries.set(key, val);
        this.count++;
    };

    WorkSet.prototype.get = function (key) {
        return this.entries.get(key);
    };


    WorkSet.prototype.remove = function (key) {
        if (!this.entries.has(key)) {
            return;
        }
        this.entries.remove(key);
        this.count--;
    };

    Dict.prototype.pick = function () {
        for (var key in this.elements) {
            if (this.has(key)) {
                return key;
            }
        }
        throw new Error("empty dictionary");
    };

    WorkSet.prototype.pick = function () {
        return this.entries.pick();
    }

    //Member.prototype.inNetwork = function (other) {
    //    var visited = {};
    //    var workset = new WorkSet();
    //    workset.add(this.name, this);
    //    while (!workset.isEmpty()) {
    //        var name = workset.pick();
    //        var member = workset.get(name);
    //        workset.remove(name);
    //        if (name in visited) { // don't revisit members
    //            continue;
    //        }
    //        visited[name] = member;
    //        if (member === other) { // found??
    //            return true;
    //        }
    //        member.friends.forEach(function (friend) {
    //            workset.add(friend.name, friend);
    //        });
    //    }
    //    return false;
    //};

    Member.prototype.inNetwork = function (other) {
        var visited = {};
        var worklist = [this];
        while (worklist.length > 0) {
            var member = worklist.pop();
            if (member.name in visited) { // don't revisit 
                continue;
            }
            visited[member.name] = member;
            if (member === other) { // found?
                return true
            }
            member.friends.forEach(function (friend) {
                worklist.push(friend); // add to work-list
            });
        }
        return false;
    }; // deterministic inNetwork method

    // 49 Prefer for loops

    var scores = [98, 74, 85, 77, 93, 100, 89];
    var players = [98, 74, 85, 77, 93, 100, 89];
    var input = [98, 74, 85, 77, 93, 100, 89];
    var total = 0;
    for(var i = 0, n = scores.length; i < n; i++){
        total += scores[i];
    }
    
    var mean = total / scores.length;
    mean; // 88

    // 50 Iteration
    // Common JS patterns


    //for (var i = 0, n = players.length; i < n; i++) {
    //    players[i].score ++;
    //}

    // Really? xD!
    players.forEach(function(p) {
        p.score++;
    });


    // 1st way
    var trimmed = [];
    for(var i = 0, n = input.length ; i < n ; i++){
        trimmed.push(input[i].trim());
    }

    // 2nd way
    var trimmed = [];
    input.forEach(function(s){
        trimmed.push(s.trim());
    });

    // 3rd and elegant way
    var trimmed = input.map(function(s) {
        return s.trim();
    });


    listings.filter(function(listing){
        return listing.price >= min && listing.price <= max;
    });

    function takeWhile(a, pred){
        var result = [];
        for (var i = 0, n = a.length; i < n; i++) {
            if (!pred(a[i], i)) {
                break;
            }
            result[i] = a[i];
        }
        return result;
    }

    var prefix = takeWhile([1, 2, 4, 8, 16, 32], function (n) {
        return n < 10;
    });

    Array.prototype.takeWhile = function (pred) {
        var result = [];
        for (var i = 0, n = this.length; i < n; i++) {
            if (!pred(this[i], i)) {
                break;
            }

            result[i] = this[i];
        }
        return result;
    };

    var prefix = [1, 2, 4, 8, 16, 32].takeWhile(function (n) {
        return n < 10;
    });

    function takeWhile(a, pred) {
        var result = [];
        var earlyExit = {}; // unique value signaling loop break
        
        try{
            a.forEach(function(x, i){
                if(!pred(x)){
                    throw earlyExit;
                }
                result[i] = x;
            });
        } catch (e) {
            if (e !== earlyExit) { // catch only earlyExit
                throw e;
            }
        }
        return result;
    }

    [1, 10, 100].some(function (x) { return x > 5; }); 
    [1, 10, 100].some(function (x) { return x < 0; });
    
    [1, 2, 3, 4, 5].every(function (x) { return x > 0; });
    [1, 2, 3, 4, 5].every(function (x) { return x < 3; });

    // last version of takeWhile
    function takeWhile(a, pred) {
        var result = [];
        a.every(function (x, i) {
            if (!pred(x)) {
                return false; // break
            }
            result[i] = x;
            return true; // continue
        });
        return result;
    }






})();
