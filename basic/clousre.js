/// 1
//var name = "The Window";
//var object = {
//    name : "My Object",
//    getNameFunc : function(){
//        return function(){
//            return this.name;
//        };
//    }
//};
//console.log(object.getNameFunc()());  //The Window
//
//
///// 2
//var name = "The Window";
//var object = {
//    name : "My Object",
//    getNameFunc : function(){
//        var that = this;
//        return function(){
//            return that.name;
//        };
//    }
//};
//console.log(object.getNameFunc()()); // My Object

/// 3
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return this.name;
    }
};
console.log(object.getNameFunc()); // My Object
