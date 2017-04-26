angular.module('myapp',[
  'myapp.services',
  'myapp.data',
  'ngRoute'
  ])

.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl:'app/main/main.html',
    controller:'AumetController'
  })
   .otherwise({redirectTo:'/'});

})
