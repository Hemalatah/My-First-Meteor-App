Template.profile.helpers({
	myposts: function() {
		var myposts = Posts.find({
			$or: [{
				repinnedBy: Meteor.userId()
			},
			{
				author: Meteor.userId()
			}
			]
		});
		return myposts;
	}
});

Template.profile.rendered = function() {
	$('.grid').imagesLoaded(function() {
		$('.grid').packery({
			itemSelector: '.item',
			gutter: 10
		});
	});
};