// Get the hunt for use in the template
Template.huntEdit.helpers({
  hunt: function() {
    return Hunts.findOne(Session.get('currentHuntId'));
  }
});


Template.huntEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentHuntId = Session.get('currentHuntId');
    var huntProperties = {
        name: $(e.target).find('[name=name]').val(),
        details: $(e.target).find('[name=details]').val(),
        points: $(e.target).find('[name=points]').val(),
        datestart: $(e.target).find('[name=datestart]').val(),
        dateend: $(e.target).find('[name=dateend]').val(),
        status: $(e.target).find('[name=status]').val(),
        age_min: $(e.target).find('[name=age_min]').val(),
        age_max: $(e.target).find('[name=age_max]').val()
    }
    Hunts.update(currentHuntId, {$set: huntProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('huntPage', currentHuntId);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this hunt?")) {
      var currentHuntId = Session.get('currentHuntId');
      Hunts.remove(currentHuntId);
      Meteor.Router.to('huntsList');
    }
  }
});

Template.huntEdit.rendered = function() {
  $('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: 'linked',
    autoclose: true
  });
}