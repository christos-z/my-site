export class Skill {
  name: String;
  img: String;
  experienceYears: Number;
  placesUsed: Array<String>;
  experience: Array<any>;
  numberOfPlacesUsed: Number;
  rank: String;
  desc: String;
  
  constructor(object: Skill) {
    
    this.name = object.name;
    this.img = object.img
    this.experienceYears = object.experienceYears;
    this.experience = object.experience;
    this.placesUsed = placesUsed();
    this.numberOfPlacesUsed = object.placesUsed ? object.placesUsed.length : 0
    this.rank = determineRank();
    this.desc = object.desc;
    
    function placesUsed() {
      var placesUsed = [];
      object.experience.forEach(value => placesUsed.push(value.usedAt));
      return placesUsed;
    }
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
