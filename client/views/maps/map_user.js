// fixture data
var mapData = [
  {
    title: 'My Location',
    lat: 'Sacha Greif',
    long: 'http://sachagreif.com/introducing-telescope/'
  }
];
// userMap needs to return the full map? probably subtemplating we'll get into
Template.mapUser.helpers({
  userMap: postsData
});

// maps code is supposed to go here, how?
Template.mapUser.rendered = function() {

};