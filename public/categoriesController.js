 app.controller("categoriesController",['$scope','$location','$state','$window','$http',function(  $scope, $location, $state, $window, $http){

 	$scope.category = [];
 	$scope.currCategory = [];
 	$scope.currIndex = 0;

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

   /*$scope.addCategory = function()
   {

   	console.log("add");
	$('#addCategoryModal').modal('show');


   }*/
   $scope.loading = true;

   $scope.fetchCategoryFromDB = function()
   {
   	 masterLoaderShow(true);
   	 window.setTimeout(function(){
   	 masterLoaderShow(false);
    },5000);



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
  	$scope.currIndex = arg;
  	$scope.currCategory = angular.copy($scope.category_Arr[arg]);
  	 console.log( $scope.currCategory );


  }

   $scope.AddCategoryName = '';
  $scope.addCategoryNameError = false;
  $scope.addCategoryNameTouched = false;

  $scope.addCategoryName = function()
  {
  	var regex = /^.{2,20}$/;
  	$scope.addCategoryNameError = !regex.test($scope.AddCategoryName); 
  	  $scope.addCategoryNameTouched = true; 	
  }


  $scope.AddCategoryDesc = '';
  $scope.addCategoryDescError = false;
  $scope.addCategoryDescTouched = false;

  $scope.addCategoryDesc = function()
  {
  	var regex = /^.{2,160}$/;
  	$scope.addCategoryDescError = !regex.test($scope.AddCategoryDesc); 
  	  $scope.addCategoryDescTouched = true; 	
  }

/************EDIT CATEGORY VALIDATION****************/
	

  $scope.editCategoryNameError = false;
  $scope.editCategoryNameTouched = false;

  $scope.editCategoryName = function()
  {
  	var regex = /^.{2,20}$/;
  	$scope.editCategoryNameError = !regex.test($scope.currCategory.categoryName); 
  	  $scope.editCategoryNameTouched = true; 	
  }


  
  $scope.editCategoryDescError = false;
  $scope.editCategoryDescTouched = false;

  $scope.editCategoryDesc = function()
  {
  	var regex = /^.{2,160}$/;
  	$scope.editCategoryDescError = !regex.test($scope.currCategory.categoryDescription); 
  	  $scope.editCategoryDescTouched = true; 	
  }

  $scope.editCategoryToDB = function(){

  	var success = true;
    masterLoaderShow(true);

    window.setTimeout(function(){
    	if (success)
    	{
    		$scope.category_Arr[$scope.currIndex] = $scope.currCategory;
    	}
    	
      masterLoaderShow(false);
    },5000);

  }
   
}]);




