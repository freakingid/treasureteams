/*
  Overall Hunts in the system.

  id                  int             primary_key
  name                string          Hunt Name             Just the marketable name of the hunt
  details             string          Hunt Description      When does hunt begin? End? What is unique about it?
  profile_media_id    int             Profile Image         Lookup in media collection
  points              int             Hunt Point Value      How many points in overall standing is this hunt worth? (OPTIONAL; Default is 1; should Default be 5?)
  leaderId            int             Hunt Moderator        Lookup in user collection; Who started this Hunt?
  leaderName          string          Hunt Moderator Name   actual name of moderator
  datestart           datetime        Hunt Start Date       When should this hunt automatically begin? (defaults to NOW)
  dateend             datetime        Hunt End Date         When should this hunt automatically end? (optional)
  tofind_ids          array of int    Hunt Finds            Lookup in tofinds collection; What tofinds are part of this hunt?
  team_ids            array of int    Hunt Teams            Lookup in teams collection; What teams have signed up for this hunt?
  status              string          Hunt Status           Draft; Scheduled; Ongoing; Judging; Completed; any other status
  dateAdded           datetime        Submission Date       When was this find added to the hunt?
  age_min             int             Minimum Age           Minimum age of users allowed to join
  age_max             int             Maximum Age           Maximum age of users allowed to join


  OPTIONAL
  For performance reasons, we might do this:
  claimfind_ids   array of int    Hunt Claims           Lookup in claimfinds collection; What claimfinds are part of this hunt?
  For historical reasons, we might do this:
  datecompleted   datetime        Hunt Completion Date  When the hunt came to a close, for whatever reason.
*/
Hunts = new Meteor.Collection('hunts');

Meteor.methods({
  // add a hunt
  hunt: function(huntAttributes) {
    var user = Meteor.user(),
      // trying to add hunt with attributes that are supposed to be unique?
      huntWithSameName = Hunts.findOne({name: huntAttributes.name});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new hunts");

    // ensure the hunt has a name (and add other required properties here later)
    if (!huntAttributes.name)
      throw new Meteor.Error(422, 'Please give the hunt a name');

    // check that there are no previous hunts with the same name (and other attributes)
    if (huntAttributes.name && huntWithSameName) {
      throw new Meteor.Error(302, 
        'This name has already been used for a hunt', 
        huntWithSameName._id);
    }

      name: $(event.target).find('[name=name]').val(),
      details: $(event.target).find('[name=details]').val(),
      points: $(event.target).find('[name=points]').val(),
      datestart: $(event.target).find('[name=datestart]').val(),
      dateend: $(event.target).find('[name=dateend]').val(),
      status: $(event.target).find('[name=status]').val(),
      age_min: $(event.target).find('[name=age_min]').val(),
      age_max: $(event.target).find('[name=age_max]').val()
      
    // pick out the whitelisted keys we allow to be added to database
    var hunt = _.extend(_.pick(huntAttributes, 'name', 'details', 'points',
                          'datestart', 'dateend', 'status', 'age_min', 'age_max'), {
      leaderId: user._id, 
      leaderName: user.username, 
      dateAdded: new Date().getTime()
    });

    var huntId = Hunts.insert(hunt);

    return huntId;
  }
});

// Permissions required (on right) for actions (on left) to be allowed
Hunts.allow({
  update: ownsDocument,
  remove: ownsDocument
});
// Specific things to deny -- don't allow updating every field, for instance
Hunts.deny({
  update: function(userId, hunt, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'name', 'details', 'points', 'datestart', 'dateend', 'status', 'age_min', 'age_max').length > 0);
  }
});