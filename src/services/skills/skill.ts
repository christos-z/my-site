export interface Skill {
  name: String,
  img: String,
  experienceYears: Number,
  rank: String
}

export class SkillClass implements Skill {
    
    name: String;
    img: String;
    experienceYears: Number;
    placesUsed: Array<String>;
    numberOfPlacesUsed: Number;
    rank: String;
    
    constructor(object: Object) {
        this.name = object['name'];
        this.img = object['img'];
        // this.experienceYears = object['experienceYears'];
        this.placesUsed = object['placesUsed'];
        // this.numberOfPlacesUsed = object['placesUsed'].length
        // this.rank = determineRank();
        
        function determineRank() {
            
            if (this.experienceYears >= 15) {
                return 'platinum';
            } else if (this.experienceYears >= 10) {
                return 'gold';
            } else if (this.experienceYears >= 5) {
                return 'silver';
            } else {
                return 'bronze';
            }
        }
    }
}