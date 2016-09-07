angular.module("starter.registros", [])
.controller("FormCtrl", function($scope){
 $scope.formData = {
    name: "",
    toggle: false,
    check: false,
    radio: "si",
    select: "1"
 };
 $scope.send = function(form)
 {
 	console.log(form);
 }
})