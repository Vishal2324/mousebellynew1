app.controller("RecipeController",['$scope','$location','$window','$http',function(  $scope , $location, $window, $http){

  console.log('Recipe');
  $scope.recipeName="xyz";
  $scope.servingSize="3";
  $scope.timetoMake="";

  
  $scope.ingredients = [];
  $scope.step = [];

  $scope.addIngredient = function()
  {
    var json = {"ingredientName":"","ingredientQty":"","ingredientUnit":""};

    $scope.ingredients.push(json);

    //console.log( $scope.ingredients );
  }

  $scope.DeleteIngredient = function( arg )
  {
    $scope.ingredients.splice(arg,1);
  }

  $scope.addStep = function()
  {
    var json = {"step":""};

    $scope.step.push(json);

    //console.log( $scope.step );
  }
  console.log( $scope.timetoMake);

    $scope.saveIngredient = function(){

      var json = 
      {
        "ingredientName":$scope.recipeName,
        "ServingSize":$scope.servingSize,
        "timetoMake":$scope.timetoMake,
        "ingredients":$scope.ingredients,
        "Steps":$scope.step

      };
      var myJSON = JSON.stringify(json);

      console.log("hello Save");
      console.log(myJSON);


    }

     $scope. viewRecipe = function(){

      var json
      {"ingredientName":"xyz",
"ServingSize":"3",
"timetoMake":"90",
"ingredients":
    [{
    "ingredientName":"gsyufayfayu",
    "ingredientQty":"","ingredientUnit":""
      },
    {
    "ingredientName":"adrak",
    "ingredientQty":"",
    "ingredientUnit":""
    }],
    "Steps":
    [{"step":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
      {"step":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},
    {"step":"gcXtysxtstysctysxtycast"}
]}









     }




}]);