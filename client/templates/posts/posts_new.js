Template.postsNew.events({
	'submit form': function(e) {
		e.preventDefault();
		var url = $(e.target).find('[name=url]').val();
		Meteor.call('simplecrawler_findMetadata', url, function (error, result) {
			//Error is empty if all goes well
			if (error) {

			} else {
				console.log(result);
				var post = {
					url: url,
					content: result
				}
				Session.set("postPreview", post);
				Router.go('postsPreview');
			}
		});
	}
});