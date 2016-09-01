angular.module("starter.controllers", ["starter.services"])

.controller("usersCtrl", function($scope, Users, $state, $stateParams, $window)
{
    $scope.initUsers = function()
    {
        Users.all().then(function(users)
        {
            $scope.users = users;
        })
         $scope.remove = function(userId)
        {
            Users.remove(userId).then(
              function(res)
              {
                  $window.location.reload();
              },
              function(error)
              {
                  console.log(error);
              }
            )
        }
    }
    $scope.initAddUsers = function()
    {
        $scope.save = function(user)
        {
            Users.add(user.name).then(
              function(res)
              {
                  $state.go("users");
              },
              function(error)
              {
                  console.log(error);
              }
            );
        }
    }
     $scope.initEditUsers = function()
    {
        var id = $stateParams.userId;
        Users.get(id).then(function(user)
        {
            $scope.user = user;
        })

        $scope.update = function(user)
        {
            Users.update(user).then(
              function(res)
              {
                $state.go("users");
              },
              function(error)
              {
                console.log(error);
              }
            )
        }
    }
})