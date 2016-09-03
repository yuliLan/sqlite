angular.module("starter.mapa", [])
.controller('MapController', function($scope, $cordovaGeolocation, $ionicPlatform) {
  var map;
  function showMap(coords) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: coords.latitude, lng: coords.longitude},
    zoom: 8
   });
  }

  $ionicPlatform.ready(function() {
     var posOptions = {timeout: 10000, enableHighAccuracy: true};
     $cordovaGeolocation.getCurrentPosition(posOptions)
      .then(function (position) {
    	$scope.coords = position.coords;
    	showMap(position.coords);
        }, function(err) {
        console.log('getCurrentPosition error: ' + angular.toJson(err));
        });
  });
});