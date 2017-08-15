Template.commentNew.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var $body = $(e.target).find('[name=body]');
		var comment = {
			body: $body.val(),
			postId: template.data._id
		};

		if(!comment.body) {
			sAlert.info('Please add some content');
		} else {
			Meteor.call('commentInsert', comment, function(error, commentId) {
				if (error) {
					sAlert.error('Opps, something went wrong. Please try again.');
				} else {
					$body.val('');
				}
			});
		}
	}
});