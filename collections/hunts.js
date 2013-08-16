/*
  Overall Hunts in the system.

  id                  int             primary_key
  name                string          Hunt Name             Just the marketable name of the hunt
  details             string          Hunt Description      When does hunt begin? End? What is unique about it?
  profile_media_id    int             Profile Image         Lookup in media collection
  points              int             Hunt Point Value      How many points in overall standing is this hunt worth? (OPTIONAL; Default is 1; should Default be 5?)
  leaderid            int             Hunt Moderator        Lookup in user collection; Who started this Hunt?
  datestart           datetime        Hunt Start Date       When should this hunt automatically begin? (defaults to NOW)
  dateend             datetime        Hunt End Date         When should this hunt automatically end? (optional)
  tofind_ids          array of int    Hunt Finds            Lookup in tofinds collection; What tofinds are part of this hunt?
  team_ids            array of int    Hunt Teams            Lookup in teams collection; What teams have signed up for this hunt?
  status              string          Hunt Status           Draft; Scheduled; Ongoing; Judging; Completed; any other status
  dateadded           datetime        Submission Date       When was this find added to the hunt?
  age_min             int             Minimum Age           Minimum age of users allowed to join
  age_max             int             Maximum Age           Maximum age of users allowed to join


  OPTIONAL
  For performance reasons, we might do this:
  claimfind_ids   array of int    Hunt Claims           Lookup in claimfinds collection; What claimfinds are part of this hunt?
  For historical reasons, we might do this:
  datecompleted   datetime        Hunt Completion Date  When the hunt came to a close, for whatever reason.
*/
