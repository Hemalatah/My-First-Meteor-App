Template.commentItem.helpers({
	formatDate: function(date) {
		return moment(date).format('MMM D');
	}
});