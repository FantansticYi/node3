/*
console.log("hello world");
*/

/*
exports.world = function(){
    console.log('hello world');
};
*/
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
}
module.exports = Hello;

