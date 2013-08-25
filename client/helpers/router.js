/*
  Was trying to use routes like:
  a. /hunt/submit
  b. /hunt/:_id/edit
  From Discover Meteor I thought these would work.
  Changing to:
  a. /huntsubmit
  b. /huntedit/:_id
*/
Meteor.Router.add({
    '/': 'huntsList',
    
    '/hunt/:_id': {
        to: 'huntPage',
        and: function(id) { Session.set('currentHuntId', id); }
    },
    '/hunt/:_id/edit': {
        to: 'huntEdit',
        and: function(id) { Session.set('currentHuntId', id); }
    },
    '/huntsubmit' : 'huntSubmit',
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