/*
  Teams of users. Only Teams can sign up for a hunt, not individual users.
  
  id                  int             primary_key
  name                string          Team Name             Unique name for the team
  details             string          Team Bio              Information about the team
  leader_id           int             Team Leader           Lookup in user collection; Who is the team founder / leader?
  profile_media_id    int             Profile Image         Lookup in media collection
  wins                int             Wins                  How many hunts has this team won?
  points              int             Points                How many points has this team won?
  age_min             int             Minimum Age           Minimum age of users allowed to join
  age_max             int             Maximum Age           Maximum age of users allowed to join
  
*/
