angular.module('myapp.data',[])

.controller('AumetController' , function($scope, Data){
	$scope.pharma=[];
	$scope.nutrition=[];
	$scope.med=[];
	Data.getAll().then(function(data){
	$scope.all = data;
	for (var i = 0; i < $scope.all.length; i++) {
		if($scope.all[i].category.indexOf("Pharmaceutical")>-1){
			$scope.pharma.push($scope.all[i])
		};
		 if($scope.all[i].category.indexOf("Equipment")>-1){
			$scope.med.push($scope.all[i])
		};
		if($scope.all[i].category.indexOf("Agriculture")>-1){
			$scope.nutrition.push($scope.all[i])
		};
	}
	})

});