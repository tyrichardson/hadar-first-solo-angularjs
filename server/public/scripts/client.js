let tyApp = angular.module('tyApp', []);

tyApp.controller('LunchRoom', function(){
    console.log("the controller has started");
    let self = this;
    self.food = "I'll just have a salad...";

});