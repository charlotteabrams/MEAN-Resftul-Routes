// console.log('in friends controller front end')
myApp.controller('friendController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
	$scope.friends = '';
	var index = function(){
	    friendsFactory.index(function(returnedData){
	      	$scope.friends = returnedData;
	    });
	};
	index();
	$scope.create = function(){
		friendsFactory.create($scope.newFriend, function(data){
			$scope.newFriend = data;
		})
		$scope.newFriend = {};
		$location.url('/')
	}
	$scope.delete = function(id){
		// console.log(id)
		friendsFactory.delete(id, function(deleteFriend){
			console.log(deleteFriend)
			index();
		})
	}
}])

