Template.huntItem.helpers({
  // does the current user own the current hunt?
  // for debug, we need to just return true, allowing anyone to take ownership
  ownHunt: function() {
    return true;
    // return this.userId == Meteor.userId();
  }
});