Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes) {
		check(this.userId, String);
		check(commentAttributes, {
			postId: String,
			body: String
		});
		var user=Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);
		if (!post) 
			throw new Meteor.Error('invalid-comment', 'You must comment on a post.');
		comment = _.extend(commentAttributes, {
			userId: user._id,
			author_name: user.profile.name,
			author_avatar_url: "https://pbs.twimg.com/profile_images/688549100116049920/JSubN4B5_400x400.png",
			submitted: new Date()
		});
		return Comments.insert(comment);
	}
});