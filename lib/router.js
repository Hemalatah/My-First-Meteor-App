Router.configure({
	layoutTemplate: 'fluidlayout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
	}
});

Router.route('/', {
	name: 'postsList'
});

Router.route('/new', {
	layoutTemplate: 'layout',
	name: 'postsNew'
});

Router.route('/preview', {
	layoutTemplate: 'layout',
	name: 'postsPreview'
});

Router.route('posts/:_id', {
	layoutTemplate: 'layout',
	name: 'postPage',
	data: function() {
		return Posts.findOne(this.params._id);
	},
	waitOn: function() {
		return Meteor.subscribe('comments', this.params._id);
	}
});

Router.route('/profile', {
	layoutTemplate: 'fluidlayout',
	name: 'profile',
	data: function() {
		return Posts.find({
			author: Meteor.userId()
		});
	}
});

var requireLogin = function() {
	if (!Meteor.user()) {
		this.render('accessDenied');
	} else {
		this.next();
	}
};

Router.onBeforeAction(requireLogin, {
	only: ['postsNew', 'postsPreview', 'profile']
});
