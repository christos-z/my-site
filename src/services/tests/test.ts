export class Test {
  company: string;
  testUrl: string;
  logoImg: string;
  
  constructor(object: Test) {
    
    this.company = object.company;
    this.testUrl = object.testUrl;
    this.logoImg = object.logoImg;
  }
}
