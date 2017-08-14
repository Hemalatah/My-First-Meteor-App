Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		// allow only if the user is looged in
		return !!userId;
	},
	update: function(userId, doc) {
		// allow only if the user is logged in
		return !!userId;
	}
})