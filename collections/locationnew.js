/*
  Location submitted with a claimed find.
  When a usersubmits a find for a hunt, the associated location comes in as locationnew.
  This is so we can resolve locationnew with locationknown.
  We can then curate locationknown to be most meaningful, and hopefully not have too many duplicate locations after curation.

  id            int             primary_key
  name          string          Location Name         Proper name of location; "Dairy Queen," "Paul's House"
  details       string          Location Details      Details of the location, as recorded
  media         array of int    Location Media        Lookup in media collection; what images / videos / etc. are part of this location?
  approximate   boolean         Approximation         Is submitted location approximate? [true | false] If true, user must refine before it is curated.
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
