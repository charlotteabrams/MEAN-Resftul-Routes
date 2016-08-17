// console.log("This is factory speaking")
myApp.factory('friendsFactory', ['$http', function($http){
  // constructor for our factory
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(updatefriend, id, callback){ 
    	console.log("id in update is", id)
    	console.log('updateFriend is', updatefriend)
      	$http.put('/friends/' + id, updatefriend).then(function(updatedfriend){
      		console.log('EWEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
      		console.log("updateFriend in friendsF is", updatedfriend)
      		callback(updatedfriend.data)
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      })
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
        $http.delete('/friends/' + id ). then(function(deletedfriend){
        	callback(deletedfriend)
        })
    };
    this.show = function(id, callback){
    	console.log("id in show is", id)
    	$http.get('/friends/' + id).then(function(showfriend){
    		callback(showfriend.data)
    	})
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);