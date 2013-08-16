/*
  Finds listed in a hunt.
  This is the "go find it" list. Recording actual finds is in claimfind collection.

  id            int             primary_key
  name          string          Name                  What is this find uniquely called for this hunt? Only needs to be unique to this hunt, not globally.
  description   string          Description           Details about the find.
  status        string          Find Status           Draft; Published; any other status
  points        int             Find Points           For finds that are weighted and worth more than other finds, how much is this worth? (Default is 1) Should default be 5?
  hunt_id       int             Hunt                  Lookup in hunts collection; What hunt does this find belong to?
  dateadded     datetime        Submission Date       When was this find added to the hunt?
  find_author   int             Find Author           Lookup in user collection; Which user authored this find?
  media_id      array of int    Find Media            Lookup in media collection; What images / videos / etc. are attached to this find definition?
*/

