angular.module("starter.mapa", ["starter.services"])
.controller('MapController', function($scope, Users,  $state, $cordovaGeolocation, $ionicPlatform) {
  $scope.formulario = function(){
    $state.go("formUsers");
  }
  var map;
  function showMap(coords) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: coords.latitude, lng: coords.longitude},
    zoom: 8
   });
  /*
   var marker = new google.maps.Marker({
    position: {lat: coords.latitude, lng: coords.longitude},
    map: map,
    title: 'Hello World!'
  });*/


  var uluru = {lat: coords.latitude, lng: coords.longitude};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  Users.get(2).then(function(user)
        {
            $scope.user = user;
        });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+'</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
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