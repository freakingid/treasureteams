/* autopublish is already off? */
Meteor.publish('markers', function() {
  return Markers.find();
});

Meteor.publish('hunts', function() {
  return Hunts.find();
});