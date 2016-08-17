console.log('**********friends controller***********');
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
Friend = mongoose.model('Friend')


function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      if(err){
        console.log(err);
      } else {
        res.json(friends);
      }
    })
  };
  this.create = function(req,res){
    // console.log("IN THE CREATE")
      var friend = new Friend(req.body)
      friend.save(function(err){
        if(err){
          console.log(err);
        } else {
          res.json(friend)
        }
      })
  };
  this.update = function(req,res){
    console.log('IN THE UPDATE IN FRIENdsdssdsdsddsDS>JS')
    console.log("rec.body!dsdnjsdsjdjdsjdh!!!", req.body, '********');
    console.log(req.params.id, '*********', 'DSNHJSHDJDHJDHJS')
    Friend.findById(req.params.id).exec(function(err, friend){
        friend.fname = req.body.fname;
        friend.lname = req.body.lname;
        friend.dob = req.body.dob;
        console.log(friend)
        friend.save(function(err){
          if(err){
            console.log(err)
            res.json(friend)
          } else {
            res.json(friend)
          }
        })
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log(err);
      } else {
        Friend.find({}, function(err, friends){
          if(err){
            console.log(err)
          } else {
            res.json(friends);
          }
        })
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, showfriend){
      if(err){
        console.log(err);
      } else {
        res.json(showfriend)
      }
    })
  };
}
module.exports = new FriendsController();