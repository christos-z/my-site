import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tests = [
      {
        company: 'The Workshop',
        testUrl: 'http://christoszenonos.com/tech-tests/the-workshop',
        img: 'https://www.theworkshop.com/images/dist/the-workshop-logo-desktop.png'
      },
      {
        company: 'PulseLive',
        testUrl: 'http://www.christoszenonos.com/tech-tests/pulselive',
        img: 'https://media.licdn.com/media/p/2/005/037/0ba/20e37f9.png'
      }
    ];
    const placesWorked = [
      {
        company: 'The Workshop',
        img: 'https://www.theworkshop.com/images/dist/the-workshop-logo-desktop.png'
      },
      {
        company: 'PulseLive',
        img: 'https://media.licdn.com/media/p/2/005/037/0ba/20e37f9.png'
      },
      {
        company: 'Quidco',
        img: '/assets/logos/quidco.svg',
        // list tech used in groups aka, front end, back end etc
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
      desc: [
        `Javascript is a huge part of my life, it's where my programming journey first began and it's whats ignited my passion development ever since.`,
        `Whether it's personal or commercial projects, the chances are that I've either had to use or incorparate javascript within these projects in one way or another.`,
        `I've been fortunate enough to work in a variety of different javascript technologies and frameworks. During my time at Quidco, I utilised AngularJS, JQuery and Vanilla Javascript on a daily basis. Some examples are:`,
        {
          list: [
            `Creating animations.`,
            `Accordions.`,
            `Carousels.`,
            `Homepage & Deal Widgets.`,
            `Pagination.`,
            `Async loaders.`,
            `DOM manipulation.`,
            `AngularJS, mainly https://www.shoop.fr/ (Quidco's french cashback site, written entirely in AngularJS.`,
            `Cashback toolbar.`
          ]
        },
        `Talk about nodejs with quidco as well for the back end.`,
        `It's been awesome to see javascript continue to grow and develop. with the arrival of ECMAScript 6, new features such as arrow functions etc. , `
      ] 
    },
    {
      name: 'AngularJS',
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
    return {skills, tests, placesWorked};
  }
}
