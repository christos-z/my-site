import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tests = [
      {
        company: 'The Workshop',
        testUrl: 'http://christoszenonos.com/tech-tests/the-workshop',
        logoImg: 'https://www.theworkshop.com/images/dist/the-workshop-logo-desktop.png'
      },
      {
        company: 'PulseLive',
        testUrl: 'http://www.christoszenonos.com/tech-tests/pulselive',
        logoImg: 'https://media.licdn.com/media/p/2/005/037/0ba/20e37f9.png'
      }
    ];
    const skills = [
    {
      name: 'Javascript',
      img: '/assets/logos/javascript.svg',
      experienceYears: 15,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ],
      desc: 'Javascript is a huge part of my programming life, whether it\'s personal or commercial projects, the chances are that I\'ve used javascript throughout these projects in one way or another.'
    },
    {
      name: 'AngularJS (1 & 2)',
      img: '/assets/logos/angularjs.svg',
      experienceYears: 5,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'NodeJS',
      img: '/assets/logos/nodejs.svg',
      experienceYears: 2,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Grunt',
      img: '/assets/logos/grunt.svg',
      experienceYears: 5,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Bootstrap',
      img: '/assets/logos/bootstrap.svg',
      experienceYears: 7,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'CSS',
      img: '/assets/logos/css3.svg',
      experienceYears: 15,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'HTML',
      img: '/assets/logos/html-5.svg',
      experienceYears: 15,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'jQuery',
      img: '/assets/logos/jquery.svg',
      experienceYears: 10,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Apache',
      img: '/assets/logos/apache.svg',
      experienceYears: 10,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Nginx',
      img: '/assets/logos/nginx.svg',
      experienceYears: 6,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Mongodb',
      img: '/assets/logos/mongodb.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Gulp',
      img: '/assets/logos/gulp.svg',
      experienceYears: 4,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Webpack',
      img: '/assets/logos/webpack.svg',
      experienceYears: 2,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'NPM',
      img: '/assets/logos/npm.svg',
      experienceYears: 5,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Yarn',
      img: '/assets/logos/yarn.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'The Workshop',timeSpentUsing:5}
      ]
    },
    {
      name: 'Less',
      img: '/assets/logos/less.svg',
      experienceYears: 5,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Sass',
      img: '/assets/logos/sass.svg',
      experienceYears: 5,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Git',
      img: '/assets/logos/git.svg',
      experienceYears: 15,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Jade/Pug',
      img: '/assets/logos/pug.svg',
      experienceYears: 3,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'MySQL',
      img: '/assets/logos/mysql.svg',
      experienceYears: 7,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'HammerJS',
      img: '/assets/logos/hammerjs.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'The Workshop',timeSpentUsing:5}
      ]
    },
    {
      name: 'Express',
      img: '/assets/logos/express.svg',
      experienceYears: 2,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Koa',
      img: '/assets/logos/koa.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Agile',
      img: '/assets/logos/agile.svg',
      experienceYears: 7,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Pulselive',timeSpentUsing:5},
      {usedAt:'The Workshop',timeSpentUsing:5}
      ]
    },
    {
      name: 'Canvas',
      img: '/assets/logos/canvas.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'UnderscoreJs',
      img: '/assets/logos/underscore.svg',
      experienceYears: 1,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      ]
    },
    {
      name: 'lodash',
      img: '/assets/logos/lodash.svg',
      experienceYears: 2,
      experience: [
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'This website',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Mustachejs',
      img: '/assets/logos/mustachejs.svg',
      experienceYears: 0,
      experience: [
      {usedAt:'Pulselive',timeSpentUsing:5}
      ]
    },
    {
      name: 'Twig',
      img: '/assets/logos/twig.svg',
      experienceYears: 3,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5}
      ]
    },
    {
      name: 'PHP',
      img: '/assets/logos/php.svg',
      experienceYears: 7,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    {
      name: 'Zend',
      img: '/assets/logos/zend.svg',
      experienceYears: 3,
      experience: [
      {usedAt:'Quidco',timeSpentUsing:5}
      ]
    },
    {
      name: 'Typescript',
      img: '/assets/logos/typescript.svg',
      experienceYears: 1,
      experience: [
      {usedAt:'The Workshop',timeSpentUsing:5},
      {usedAt:'Other personal projects',timeSpentUsing:5}
      ]
    },
    
    ];
    return {skills, tests};
  }
}
