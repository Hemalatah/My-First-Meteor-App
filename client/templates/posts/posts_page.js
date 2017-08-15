Template.postPage.helpers({
	comments: function() {
		return Comments.find({
			postId: this._id
		});
	}
});


Template.postPage.events({
	'click .btn-pin': function(e) {
		var author = this.author;
		var userId = Meteor.userId();
		if (author == userId) {
			sAlert.info('Looks like you\'ve already saved this Post...');
		} else {
			var post = Posts.findOne(this._id);
			if (post.repinnedBy == null) {
				post.repinnedBy = [userId];
			} else {
				post.repinnedBy.push(userId);
			}
			Posts.update(this._id, {
				$set: {
					"repinnedBy": post.repinnedBy
				}
			});
			Router.go('profile');
		}
	}
});