Template.huntSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var hunt = {
      name: $(event.target).find('[name=name]').val(),
      details: $(event.target).find('[name=details]').val(),
      points: $(event.target).find('[name=points]').val(),
      datestart: $(event.target).find('[name=datestart]').val(),
      dateend: $(event.target).find('[name=dateend]').val(),
      status: $(event.target).find('[name=status]').val(),
      age_min: $(event.target).find('[name=age_min]').val(),
      age_max: $(event.target).find('[name=age_max]').val()
    }
    /* (methodname, arguments, callback for when server side is done)
        Method (hunt) to be defined in the collections file */
    Meteor.call('hunt', hunt, function(error, id) {
      if (error)
        return alert(error.reason);

      Meteor.Router.to('huntPage', id);
    });
  }
});