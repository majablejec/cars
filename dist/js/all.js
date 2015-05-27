angular.module('SmartNinja', []);
angular.module('SmartNinja').controller('MainController', function($scope, $http) {
  
	$scope.text = "4";
	$scope.status = 'Pending';
	$scope.ajaxFailed = false;
	
	$http.get('http://smartninja.betoo.si/api/CMW/cars', {}).then(function(response){
		$scope.status = 'Completed';
		$scope.cars = response.data;
	},function(errorResponse){
		$scope.ajaxFailed = true;
  	});
	
	$http.get('http://smartninja.betoo.si/api/CMW/timeslots', {}).then(function(response){
		$scope.timeslots = response.data;
	},function(errorResponse){
		$scope.ajaxFailed = true;
  	});
	
	$scope.reservation = function (timeslotId, email) {
		$http.post('http://smartninja.betoo.si/api/CMW/reservations', {timeslotId : timeslotId, email: email}).then(function(success){
			alert("Your reservation was successfully submitted. Thank you!");
		}, function(error){
			alert('There was an error when making your reservation. Please try again or contact...');
		});
	};

});