// keep JSin

// Objects and prototypes
(function () {

    // 30

    // User constructor -> User class xD!
    function User(name, passwordHash) {
        this.name = name;
        this.passwordHash = passwordHash;
    };

    User.prototype.toString = function () {
        return "[User " + this.name + "]";
    };

    User.prototype.checkPassword = function () {
        return hash(password) === this.passwordHash;
    };

    var u = new User("sfalken", 
                     "0asda876adsf6aadf7avzcarer");

    console.log(Object.getPrototypeOf(u) === User.prototype);
    // similarly
    console.log(u.__proto__ === User.prototype);

    // 31
    var empty = Object.create(null); //object with no prototype
    console.log("__proto__" in empty);

    if (typeof Object.getPrototypeOf === "undefined") {
        Object.getPrototypeOf = function (obj) {
            var t = typeof obj;
            if (!obj || (t !== "object" && t !== "function")) {
                throw new TypeError("not an object");
            };
            return obj.__proto__;
        };
    };

    // 32
    var c = Object.create(User);
    console.log(c);

    // 33

    
    // User constructor -> User class xD!
    function User2(name, passwordHash) {
        "use strict";
        this.name = name;
        this.passwordHash = passwordHash;
    };
    // this way use strict will block this creating new User2 variable
    // if we don't use strict it will create name and passwordHash variables as 
    // global and it is too harmful xD!
    //var c3 = User2("c3",
     //              "asn60d9ARS9D6ADRs96afbafd");
   
    // Another control rather than strict mode
    function controlledUser(name, passwordHash) {
        if (!(this instanceof controlledUser)) {
            return new controlledUser(name, passwordHash);
        };

        this.name = name;
        this.passwordHash = passwordHash;
    };

    var u2 = controlledUser("sfalken",
                 "0asda876adsf6aadf7avzcarer");

    var u3 = new controlledUser("sfalken",
                 "0asda876adsf6aadf7avzcarer");

    console.log(u2 instanceof controlledUser);
    console.log(u3 instanceof controlledUser);

    //// ******** \\\\\\
    function bestControlleduser(name, passwordHash) {
        var self = this instanceof bestControlleduser
                    ? this
                    : Object.create(User.prototype);

        self.name = name;
        self.passwordHash = passwordHash;

        return self;
    };

    // If you are using browser
    // which doesn't support ES5

    if (typeof Object.create === "undefined") {
        Object.create = function (prototype) {
            function C() { };
            C.prototype = prototype;
            return new C();
        };
    };

})();
