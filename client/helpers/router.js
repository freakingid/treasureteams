Meteor.Router.add({
    '/': {to: 'huntsList', as: 'home'},
    '/hunts' : 'huntsList',
    '/hunt/:_id': {
        to: 'huntPage',
        and: function(id) { Session.set('currentHuntId', id); }
    },
    '/hunt/:_id/edit': {
        to: 'huntEdit',
        and: function(id) { Session.set('currentHuntId', id); }
    },
    '/hunt/submit' : 'huntSubmit',
    '/maps/user': 'mapUser'
});
// require to be logged in as any user to access passed-in page
Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  }
});
// require login to access the hunt submitting page
Meteor.Router.filter('requireLogin', {only: 'huntSubmit'});