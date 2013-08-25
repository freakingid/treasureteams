Template.huntPage.helpers({
  currentHunt: function() {
    return Hunts.findOne(Session.get('currentHuntId'));
  }
});