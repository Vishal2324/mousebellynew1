app.controller("RecipeController",['$scope','$location','$state','$window','$http',function(  $scope, $location, $state, $window, $http){


  $('#RecipeModal').on('shown.bs.modal',function(){
    /*alert("hiie");*/

    // window.setTimeout(function(){
      $state.transitionTo('recipeModal.viewRecipe');
    // },1000);
    // angular.element(document.body).injector().get('$state').transitionTo('recipeModal.viewRecipe');

  });

  //$state.transitionTo('recipeModal.viewRecipe');

  // angular.element(document.body).injector().get('$state').transitionTo('recipeModal.viewRecipe');

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

    
    }

     $scope.currRecipeAddIngredient = function()
  {
    var json = {"ingredientName":"","ingredientQty":"","ingredientUnit":""};

    $scope.currRecipe.ingredients.push(json);

    
    }

    //console.log( $scope.ingredients );

  $scope.DeleteIngredient = function( arg )
  {
    $scope.ingredients.splice(arg,1);
  }

  $scope.currRecipeDeleteIngredient = function( arg )
  {
    $scope.currRecipe.ingredients.splice(arg,1);
  }

console.log("hello");

  $scope.addStep = function()
  {
    var json = {"step":""};

    $scope.step.push(json);

    //console.log( $scope.step );
  }

   $scope.currRecipeAddStep = function()
  {
    var json = {"step":""};

    $scope.currRecipe.steps.push(json);

    //console.log( $scope.step );
  }

  console.log( $scope.timetoMake);

    $scope.saveIngredient = function(){

      var json = 
      {
        "RecipeName": $scope.recipeName,
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

      $scope.json_arr = [
      {"RecipeName":"Gulab Jamun",
"ServingSize":"3",
"timetoMake":"90",
"ingredients":
[{
"ingredientName":"maida",
"ingredientQty":"2","ingredientUnit":"Kg"
}
],"steps":
[{"step":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
{"step":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},
{"step":"gcXtysxtstysctysxtycast"}
]},
{"RecipeName":"Rajma Chawal",
"ServingSize":"2",
"timetoMake":"90",
"ingredients":
[{
"ingredientName":"gsyufayfayu",
"ingredientQty":"","ingredientUnit":""
}],"steps":
[{"step":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
{"step":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},
{"step":"gcXtysxtstysctysxtycast"}
]},
 {"RecipeName":"Choley Bhature",
"ServingSize":"4",
"timetoMake":"90",
"ingredients":
[{
"ingredientName":"gsyufayfayu",
"ingredientQty":"","ingredientUnit":""
}],"steps":
[{"step":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
{"step":"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"},
{"step":"gcXtysxtstysctysxtycast"}
]},
      ]


  $scope.DeleteRecipe= function( arg )
  {
    $scope.json_arr.splice(arg,1);
  }

  $scope.currRecipeDeleteStep= function( arg )
  {
    $scope.currRecipe.steps.splice(arg,1);
  }


  $scope.moveUp=function(arg){
   if (arg > 0){

    var x = arg-1,y=arg;
    $scope.step[x] =  $scope.step.splice(y,1, $scope.step[x])[0];

    //alert( $scope.step );
   }
  }

  $scope.moveDown=function(arg){
   if (arg < $scope.step.length - 1){

    var x = arg+1,y=arg;
    $scope.step[x] =  $scope.step.splice(y,1, $scope.step[x])[0];

    //alert( $scope.step );
   }
 }

    $scope.currRecipeMoveUp=function(arg){
   if (arg > 0){

    var x = arg-1,y=arg;
    $scope.currRecipe.steps[x] =  $scope.currRecipe.steps.splice(y,1, $scope.currRecipe.steps[x])[0];

    //alert( $scope.step );

    console.log( $scope.currRecipe.steps );
   }
  }

  $scope.currRecipeMoveDown=function(arg){
   if (arg < $scope.currRecipe.steps.length - 1){

    var x = arg+1,y=arg;
    $scope.currRecipe.steps[x] =  $scope.currRecipe.steps.splice(y,1, $scope.currRecipe.steps[x])[0];

    //alert( $scope.step );
   
    console.log( $scope.currRecipe.steps );
   }
 }



  $scope.viewRecipe = function(arg){


    $('#RecipeModal').modal('show');
   
    $scope.currRecipe = $scope.json_arr[arg];

    console.log( $scope.currRecipe );

  }



   $scope.DeleteStep = function(arg){

       $scope.step.splice(arg,1);


   }

   $scope.currRecipeSave = function(){

    masterLoaderShow(true);

    window.setTimeout(function(){
      masterLoaderShow(false);
    },5000);
   }


     $scope.RecipeSave = function(){

    masterLoaderShow(true);

    window.setTimeout(function(){
      masterLoaderShow(false);
    },5000);
   }


}]);



