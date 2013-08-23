/* return ALL hunts in the database */
Template.huntsList.helpers({
  hunts: function() {
    return Hunts.find();
  }
});