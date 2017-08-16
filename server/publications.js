Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});

Meteor.publish('userData', function() {
	if (!this.userId) return null;
	return Meteor.users.find('userData', {
		fields: {
			services: 1
		}
	});
});