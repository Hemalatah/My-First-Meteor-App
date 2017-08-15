Template.postsList.helpers({
	posts: function() {
		return Posts.find();
	}
});

Template.postsList.rendered = function() {
	$('.grid').imagesLoaded(function() {
		// images have loaded
		// use the packery jQuery plugin
		$('.grid').packery({
			//options
			itemSelector: '.item',
			gutter: 10
		});
	});
};