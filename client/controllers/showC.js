// console.log("we're in showC controller")
myApp.controller('showController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
	

	friendsFactory.show($routeParams.id, function(showfriend){
		console.log(showfriend)
		$scope.friend = showfriend;
		console.log($scope.friend);
		console.log("****************")
	})
}])


