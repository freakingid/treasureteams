Template.postItem.helpers({
  // does the current user own the current post?
  ownPost: function() {
    return this.userId == Meteor.userId();
  }
});