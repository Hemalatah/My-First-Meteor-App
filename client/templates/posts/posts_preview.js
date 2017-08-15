Template.postsPreview.helpers({
	preview: function() {
		return Session.get("postPreview");
	}
});

Template.postsPreview.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			description: $(e.target).find('[name=description]').val(),
			media_url: $(e.target).find('[name=media_url]').val(),
			author: Meteor.userId(),
			author_name: Meteor.user().profile.name,
			//author_avatar_url: Meteor.user().services.twitter.profile_image_url
		};

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
})