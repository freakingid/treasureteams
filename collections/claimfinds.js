/*
  Finds users are claiming.
  When a user submits a find for a hunt, it comes in as a "ClaimFind."

  id            int             primary_key
  tofind_id     int             Hunt Find             Lookup in tofinds collection; what tofind does this claimfind claim to fulfill?
  location_id   int             Location              Lookup in locationnew or locationknown collection; what unverified location was this claim found at?
  location_type string?             Location Type         Is location_id a "locationnew," or a "location known?" [new | known]
  datefound     datetime        Find Date             When was this find recorded?
  find_user     int             Finder                Lookup in user collection; What user submitted this claim?
  media_id      array of int    Find Media            Lookup in media collection; What images / videos / etc. are part of this claim?
*/

