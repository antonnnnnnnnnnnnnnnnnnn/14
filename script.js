var Temp = /** @class */ (function () {
    function Temp(val1, val2) {
        val1 ? this.x = val1 : this.x = 1;
        val2 ? this.y = val2 : this.y = 2;
    }
    Temp.prototype.get = function () {
        return this.x;
    };
    Temp.prototype.set = function (value) {
        this.x = value;
    };
    return Temp;
}());
var temp2 = new Temp(10, 20);
// console.log(temp2.x)
// temp2.x = 4
temp2.set(6);
console.log(temp2.get());
