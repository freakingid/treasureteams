/* Fixture data for testing, only added if database is empty */
if (Hunts.find().count() === 0) {
  Hunts.insert({
    name: 'Egg hunt',
    details: 'The egg hunt features different kinds of eggs in different environments.',
    points: 5,
    datestart: '2013-08-23',
    dateend: '2013-09-23',
    status: 'Scheduled',
    age_min: 10,
    age_max: 15
  });
   
  Hunts.insert({
    name: 'US presidents',
    details: 'Sends you on a hunt for different items featuring images of US presidents.',
    points: 2,
    datestart: '2013-08-23',
    dateend: '2013-09-23',
    status: 'Scheduled',
    age_min: 10,
    age_max: 18
  });

  Hunts.insert({
    name: 'Flowers',
    details: 'Given the name of a flower, you have to figure out what it looks like and go find it.',
    points: 20,
    datestart: '2013-08-23',
    dateend: '2013-09-23',
    status: 'Scheduled',
    age_min: 12,
    age_max: 18
  });
}
