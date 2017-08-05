
var app = angular.module('myApp',['ngRoute','ngAnimate','ui.router',"ngMaterial", "materialCalendar"]);

console.log('app.js');
var toggleNav = false;

window.addEventListener('resize', function()
{
  var width = document.body.clientWidth;
  if( width > 600 )
  {
    if( !( document.getElementById("myTopnav").className === "topnav" ) )
    {
      document.getElementById("myTopnav").className = "topnav";
      $("#myTopnav").css({height: '-=180px'});
      toggleNav = false;
    }

  }

}, false);

function myFunction() {

    if( !toggleNav )
      $("#myTopnav").animate({height: '+=180px'});
    else
      $("#myTopnav").animate({height: '-=180px'});

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

    toggleNav = !toggleNav;

}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

app.directive('eatClickIf', ['$parse', '$rootScope',
  function($parse, $rootScope) {
    return {
      // this ensure eatClickIf be compiled before ngClick
      priority: 100,
      restrict: 'A',
      compile: function($element, attr) {
        var fn = $parse(attr.eatClickIf);
        return {
          pre: function link(scope, element) {
            var eventName = 'click';
            element.on(eventName, function(event) {
              var callback = function() {
                if (fn(scope, {$event: event})) {
                  // prevents ng-click to be executed
                  event.stopImmediatePropagation();
                  // prevents href
                  event.preventDefault();
                  return false;
                }
              };
              if ($rootScope.$$phase) {
                scope.$evalAsync(callback);
              } else {
                scope.$apply(callback);
              }
            });
          },
          post: function() {}
        }
      }
    }
  }
]);

app.service('fileUpload', [ '$http', function($http) {
    this.uploadFileToUrl = function(file, paramuser, uploadUrl) {
      var fd = new FormData();
      fd.append('file', file);
      //fd.append('user','vasudev89');
      return $http.post(uploadUrl, fd, {
        transformRequest : angular.identity,
        headers : {
          'Content-Type' : undefined,
          user : paramuser
        }
      }).then(function(response) {
        return response.data;
      }, function(errResponse) {
        console.error('Error while updating User');
        return "error";
      });
    }
  } ]);

  function masterLoaderShow(arg){
    if(arg)
    {
      // $("#masterLoader").css({"visibility":"visible"});
      $("#masterLoader").fadeIn(1200);

    }
    else
      $("#masterLoader").fadeOut(500);
  }

app.config(function($stateProvider, $routeProvider , $qProvider){

  
  //$qProvider.errorOnUnhandledRejections(false);

  $stateProvider

        // route to show our basic form (/form)
        .state('form',{
        views: {
         'homechef' :   {
            templateUrl: 'form.html',
            controller: 'formController'}
        }})

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            templateUrl: 'form-profile.html'
        })

        // url will be /form/interests
        .state('form.interests', {
            templateUrl: 'form-interests.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            templateUrl: 'form-payment.html'
        })


        .state('userform', {
          views: {
            'user': {
            templateUrl: 'form2.html',
            controller: 'formController2'}
          }})


        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('userform.profile', {
            templateUrl: 'form-profile2.html'
        })

        // url will be /form/interests
        .state('userform.interests', {
            templateUrl: 'form-interests2.html'
        })

        // url will be /form/payment
        .state('userform.payment', {
            templateUrl: 'form-payment2.html'
        })

       .state('recipeModal',{
        views: {
          'RecipeModal' : {
                templateUrl: 'viewRecipeForm.html',
                controller : 'RecipeController'             
                             }
                           }
       })

        .state('recipeModal.viewRecipe', {
            templateUrl: 'viewRecipeModal.html'
        })

        // url will be /form/interests
        .state('recipeModal.editRecipe', {
            templateUrl: 'editRecipeModal.html'
        })

        /**********PROFILE***********/
         .state('profileform',{
        views: {
          'Profileform' : {
                templateUrl: 'profileForm.html',
                controller : 'profileController'             
                             }
                           }
       })

        .state('profileform.food', {
            templateUrl: 'foodItem.html'
        })

        // url will be /form/interests
        .state('profileform.mealPlan', {
            templateUrl: 'mealPlan.html'
        })

        .state('profileform.recipe', {
            templateUrl: 'viewRecipeModal.html'
        })

        // url will be /form/interests
        .state('profileform.video', {
            templateUrl: 'video.html'
        })
        ;

	$routeProvider

	.when('/',{
		templateUrl : 'home.html',
		controller : 'calendarController'
	})
  .when('/signup1',{
    templateUrl : 'signup1.html',
    controller : 'indexController'
  })
  .when('/signup2',{
    templateUrl : 'signup2.html',
    controller : 'indexController'
  })
  .when('/signupChoice',{
    templateUrl : 'selectsignup.html',
    controller: 'selectsignupController'
    })
	.when('/home',{
		templateUrl : 'home.html',
		controller : 'calendarController'

	})
	.when('/login',{

		templateUrl : 'c_user/login.html',
		controller  : 'UserController'


	})
    .when('/addRecipe',{

    templateUrl : 'addRecipies.html',
    controller  : 'RecipeController'


  })
      .when('/viewRecipe',{

    templateUrl : 'viewRecipe.html',
    controller  : 'RecipeController'


  })
      .when('/Calender',{

    templateUrl : 'Calender.html',
    controller  : 'CalenderController'


  })
       .when('/Profile',{

    templateUrl : 'profile.html',
    controller  : 'profileController'


  })

    .when('/homechefList',{

    templateUrl : 'homechefList.html',
    controller  : 'homechefController'


  })

       .when('/category',{

    templateUrl : 'categories.html',
    controller  : 'categoriesController'


  });


})

app.directive('starRating',
function() {
return {
restrict : 'A',
template : '<ul class="rating">'
           + '  <li ng-repeat="star in stars" ng-click="toggle($index)">'
           + '<span ng-style="star" style="cursor:default;">'
           + '\u2605'
           + '</span>'
           + '</li>'
           + '</ul>',
scope : {
 ratingValue : '=',
 max : '=',
 onRatingSelected : '&'
},
link : function(scope, elem, attrs) {
 var updateStars = function() {
  scope.stars = [];

  var percent = ( scope.ratingValue / scope.max ) * 100;
  var perstarpercent = ( 1 / scope.max ) * 100;

  var color = "#FFC706";
  var fontSize = "20px";

  for ( var i = 0; i < scope.max; i++) {

    var starpercent = ( (i+1) / scope.max ) * 100;

    if( starpercent <= percent )
    {
      scope.stars.push({
       "background" : "linear-gradient(to right , "+color+" 100% , #a9a9a9 0%)",
       "-webkit-background-clip" : "text",
       "-webkit-text-fill-color" : "transparent",
       "font-size": fontSize
      });
    }
    else {
      if( starpercent - percent < perstarpercent )
      {
        scope.stars.push({
         "background" : "linear-gradient(to right , "+color+" "+(100 - (((starpercent - percent)/perstarpercent)*100))+"% , #a9a9a9 0%)",
         "-webkit-background-clip" : "text",
         "-webkit-text-fill-color" : "transparent",
         "font-size": fontSize
        });
      }
      else {
        scope.stars.push({
         "background" : "linear-gradient(to right , #a9a9a9 0% , #a9a9a9 100%)",
         "-webkit-background-clip" : "text",
         "-webkit-text-fill-color" : "transparent",
         "font-size": fontSize
        });
      }
    }


  }
 };

 scope.toggle = function(index) {
  scope.ratingValue = index + 1;
  scope.onRatingSelected({
   rating : index + 1
  });
 };

 scope.$watch('ratingValue',
  function(oldVal, newVal) {
   if (newVal) {
    updateStars();
   }
  }
 );
}
};
}
);
