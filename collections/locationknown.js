/*
  Location curated and improved from claimed finds.
  These are curated / improved entries from locationnew.
  I think once they are in here, they are removed from locationnew.

  id            int             primary_key
  name          string          Location Name         Proper name of location; "Dairy Queen," "Paul's House"
  details       string          Location Details      Details of the location, as recorded
  media         array of int    Location Media        Lookup in media collection; what images / videos / etc. are part of this location?
  lat           float           Latitude              Latitude as recorded
  long          float           Longitude             Longitude as recorded
  addr1         string          Address 1             Address as recorded, if applicable
  addr2         string          Address 2             Address as recorded, if applicable
  city          string          City                  City as recorded, if applicable
  state         string          State                 State as recorded, if applicable
  postalcode    string          Postal Code           Postal Code as recorded, if applicable
  country       string          Country               Country as recorded, if applicable
  ??? What else comprises non-US addresses? (I think this is okay for now.)
*/
