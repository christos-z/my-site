export class Skill {
  name: String;
  img: String;
  experienceYears: Number;
  placesUsed: Array<String>;
  numberOfPlacesUsed: Number;
  rank: String;
  
  constructor(object: Skill) {

    this.name = object.name;
    this.img = object.img
    this.experienceYears = object.experienceYears;
    this.placesUsed = object.placesUsed
    this.numberOfPlacesUsed = object.placesUsed ? object.placesUsed.length : 0
    this.rank = determineRank();
    
    function determineRank() {
      
      if (object.experienceYears >= 15) {
        return 'platinum';
      } else if (object.experienceYears >= 10) {
        return 'gold';
      } else if (object.experienceYears >= 5) {
        return 'silver';
      } else {
        return 'bronze';
      }
    }
  }
}
