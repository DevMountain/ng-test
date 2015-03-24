var app = angular.module('FunApp', []);

app.controller('MainCtrl', function($scope, data) {
	$scope.data = data;
	$scope.filterData = function() {
		var items = [];
		for(var i = 0; i<$scope.data.length; i++) {
			if($scope.data[i].name.charAt(0).toLowerCase() !== 'm') {
				items.push($scope.data[i]);
			}
		}
		return items;
	};
});