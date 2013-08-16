/*
  Media attached to different system objects:
    1. tofind                         Used to describe what you have to find.
    2. claimfind                      Used to prove you found it.
    3. teams                          Team profile image.
    4. users                          User profile image.
    5. locationnew / locationknown    Images about the location.
    6. hunt                           Promotional image for the hunt.
    
    id                        primary_key
    system_name               string                    Unique system name for the media item
    filename                  string                    Filename, if applicable
    url_src                   string                    Source URL, if applicable (if the item is found elsewhere, like an image on another site.)
    url_link                  string                    Link URL, if the media should hyperlink to some other resource
    filepath                  string                    System path to the file
    human_name                string                    Human readable name for the media
    description               string                    Description of the media
    terms                     ARRAY of strings          Like a tags taxonomy, but stored here instead of normalized for now
    width                     int                       Physical width in pixels
    height                    int                       Physical height in pixels
    filesize                  int                       Filesize in bytes
    duration                  int                       Play length in seconds (for video, audio)
    user_id                   int                       Lookup to user collection; What user submitted this media?
    
    OPTIONAL / to think about:
    location_id               int                       Lookup to locationnew or locationknown (how to handle?) where the media was generated (NOTE: Not sure about this one.)
      I'm not sure about this one. Theoretically, we have a location for each Find, and each Find has an array of media id's, so that connects media to location.
    Trying to be careful not to store too many denormalized references.
    For instance, a hunt has an array of media id's, so we don't really need the media to store the id of the hunt it is part of
    But, a user does not store an array of media id's they have submitted, so it's best to store the user here
    
*/