/*
  Messages sent to a user's team.
  Could messages be broadcast to a hunt, as well?
  
  id            int             primary_key
  subject       string          Subject                Subject of the message
  body          string          Body                   Body of the message. Is this limited in size?
  from_id       int             From                   Lookup in user collection; What user submitted this message?
  to_team_id    int             Team Recipient         Lookup in team collection; What team was this message sent to? (-1 means it was broadcast to the hunt)
  to_hunt_id    int             Hunt Recipient         Lookup in hunt collection; What hunt was this message sent during? (-1 means not during a hunt)
  media_id      array of int    Attachment(s)          Lookup in media collection; What images / videos / etc. are attached?
  datesent      datetime        Send Date              When was the message sent?
  location_id   int             Send Location          Lookup in LocationNew collection; Where was sender when the message was sent? (OPTIONAL)
  tofind_id     int             About Find             Lookup in tofind collection; What find is this message regarding? (OPTIONAL)
*/
