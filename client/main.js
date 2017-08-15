Meteor.startup(() => {
  // code to run on server at startup
  Meteor.subscribe('posts');
  Meteor.subscribe('userData');
});
