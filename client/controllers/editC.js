// console.log("we're in editC controller")
myApp.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location',function($scope, friendsFactory, $routeParams, $location) {
		$scope.update = function(){
		friendsFactory.update($scope.updateFriend, $routeParams.id, function(data){
			console.log("$$$$$$$$$$$")
			$scope.updateFriend = data;
			console.log("UPDATE FRIEND IS", $scope.updateFriend)
			$location.url('/')
		})
	}
}])

