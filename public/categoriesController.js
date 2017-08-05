 app.controller("categoriesController",['$scope','$location','$state','$window','$http',function(  $scope, $location, $state, $window, $http){

 	$scope.category = [];
 	$scope.currCategory = [];

      $scope.category_Arr = [
     {"categoryId":"01",
    "categoryName":"South Indian",
    "categoryDescription":"Dosasambarvada",
      },
       {"categoryId":"02",
    "categoryName":"North Indian",
    "categoryDescription":"Rajma Chawal",
      },
       {"categoryId":"03",
    "categoryName":"Mughlai",
    "categoryDescription":"Changezi Chicken",
      },
       {"categoryId":"04",
    "categoryName":"Israil food",
    "categoryDescription":"lifo",
      },
    ]

   $scope.addCategory = function()
   {

   	console.log("add");
	$('#addhomechefModal').modal('show');


   }

  $scope.deleteCategory= function( arg )
  {
  	console.log("delete");
    $scope.category_Arr.splice(arg,1);
  }

  $scope.editCategory = function( arg )
  {

  	console.log("edit");
  	$('#homechefModal').modal('show');
  	$scope.currCategory = $scope.category_Arr[arg];
  	 console.log( $scope.currCategory );


  }

   
}]);




