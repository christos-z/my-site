export class Test {
  company: string;
  testUrl: string;
  img: string;
  
  constructor(object: Test) {
    
    this.company = object.company;
    this.testUrl = object.testUrl;
    this.img = object.img;
  }
}
