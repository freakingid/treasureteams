Meteor.Router.add({
  '/': {to: 'huntsList', as: 'home'},
  '/hunts' : 'huntsList',
  '/hunts/submit' : 'huntSubmit',
  '/maps/user': 'mapUser'
});