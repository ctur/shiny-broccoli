//JSinxD

// 36
(function () {
    function Tree(x) {
        this.value = x;
        this.children = []; // instance state
    };

    Tree.prototype = {
        addChild: function (x) {
            this.children.push(x);
        }
    };

    var left = new Tree(2);
    left.addChild(1);
    left.addChild(3);

    var right = new Tree(6);
    right.addChild(5);
    right.addChild(7);

    var top = new Tree(4);
    top.addChild(left);
    top.addChild(right);

    console.log(top.children);

    // 37
    // CSV - Comma Separated values
    function CSVReader(separators) {
        this.separators = separators || [","];
        this.regexp =
            new RegExp(this.separators.map(function (sep) {
                return "\\" + sep[0];
            }).join("|"));
    }

    CSVReader.prototype.read = function (str) {
        var lines = str.trim().split(/\n/);
        console.log(lines);
        return lines.map(function (line) {
            return line.split(this.regexp);
        }, this); // forward out this-binding to callback
    };

    var reader = new CSVReader();
    console.log(reader.read("a,b,c\nd,e,f\n"));

    //  ->>> extra csv
    CSVReader.prototype.read = function (str) {
        var lines = str.trim().split(/\n/);
        //***//
        var self = this; // save a reference to outer this-binding
        //***//

        return lines.map(function (line) {
            return line.split(self.regexp); // use outer this
        });
    };

    var reader = new CSVReader();
    console.log(reader.read("a,b,c\nd,e,f\n"));

})();
