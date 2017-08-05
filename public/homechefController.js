app.controller("homechefController",['$scope','$location','$state','$window','$http',function(  $scope, $location, $state, $window, $http){


  $scope.viewHomeChef= function(arg){


    $('#homechefModal').modal('show');
   
     }

    $scope.homechef_Arr = [
     {"categoryId":"01",
    "categoryName":"South Indian",
    "categoryDescription":"Dosasambarvada",
      },
    ]

}]);



