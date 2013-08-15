/*
  Overall Hunts in the system.

  id              int             primary_key
  name            string          Hunt Name             Just the marketable name of the hunt
  details         string          Hunt Description      When does hunt begin? End? What is unique about it?
  leaderid        int             Hunt Moderator        Lookup in user collection; Who started this Hunt?
  datestart       datetime        Hunt Start Date       When should this hunt automatically begin? (defaults to NOW)
  dateend         datetime        Hunt End Date         When should this hunt automatically end? (optional)
  tofind_ids      array of int    Hunt Finds            Lookup in tofinds collection; What tofinds are part of this hunt?
  team_ids        array of int    Hunt Teams            Lookup in teams collection; What teams have signed up for this hunt?
  status          string          Hunt Status           Draft; Scheduled; Ongoing; Judging; Completed; any other status

  OPTIONAL
  For performance reasons, we might do this:
  claimfind_ids   array of int    Hunt Claims           Lookup in claimfinds collection; What claimfinds are part of this hunt?
  For historical reasons, we might do this:
  datecompleted   datetime        Hunt Completion Date  When the hunt came to a close, for whatever reason.
*/
