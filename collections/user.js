/*
  User in the system.
  
  id                  int             primary_key
  namefirst           string          First Name
  namelast            string          Last Name
  username            string          Username for login / handle / public if they don't want to use their real name
  email               string          Primary email address
  bio                 string          User-written bio
  profile_media_id    int             Profile Image         Lookup in media collection
  points              int             How many points has the user acquired in hunts for their teams?
  wins                int             How many hunt wins has the user been associated with?
  age                 int             Age of the user (Some hunt / team participation may be limited by age.)
*/
