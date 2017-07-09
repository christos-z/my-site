import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //Put sorting on this, so can filter via technologies, alphabetical etc.
    const skills = [
      {
        name: 'Javascript',
        img: '/assets/logos/javascript.svg',
        experienceYears: 15,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'AngularJS (1 & 2)',
        img: '/assets/logos/angularjs.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'NodeJS',
        img: '/assets/logos/nodejs.svg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Grunt',
        img: '/assets/logos/grunt.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'Other personal projects'
        ]
      },
      {
        name: 'Bootstrap',
        img: '/assets/logos/bootstrap.svg',
        experienceYears: 7,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'Other personal projects'
        ]
      },
      {
        name: 'CSS',
        img: '/assets/logos/css3.svg',
        experienceYears: 15,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'HTML',
        img: '/assets/logos/html-5.svg',
        experienceYears: 15,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'jQuery',
        img: '/assets/logos/jquery.svg',
        experienceYears: 10,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'Other personal projects'
        ]
      },
      {
        name: 'Apache',
        img: '/assets/logos/apache.svg',
        experienceYears: 10,
        placesUsed: [
          'Quidco',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Nginx',
        img: '/assets/logos/nginx.svg',
        experienceYears: 6,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'Mongodb',
        img: '/assets/logos/mongodb.svg',
        experienceYears: 0,
        placesUsed: [
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Gulp',
        img: '/assets/logos/gulp.svg',
        experienceYears: 4,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Webpack',
        img: '/assets/logos/webpack.svg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'NPM',
        img: '/assets/logos/npm.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Yarn',
        img: '/assets/logos/yarn.svg',
        experienceYears: 0,
        placesUsed: [
          'The Workshop'
        ]
      },
      {
        name: 'Less',
        img: '/assets/logos/less.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'Sass',
        img: '/assets/logos/sass.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Git',
        img: '/assets/logos/git.svg',
        experienceYears: 15,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Jade/Pug',
        img: '/assets/logos/pug.svg',
        experienceYears: 3,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'MySQL',
        img: '/assets/logos/mysql.svg',
        experienceYears: 7,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'HammerJS',
        img: '/assets/logos/hammerjs.svg',
        experienceYears: 0,
        placesUsed: [
          'The Workshop'
        ]
      },
      {
        name: 'Express',
        img: '/assets/logos/express.svg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'Koa',
        img: '/assets/logos/koa.svg',
        experienceYears: 0,
        placesUsed: [
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Agile',
        img: '/assets/logos/agile.svg',
        experienceYears: 7,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop'
        ]
      },
      {
        name: 'Canvas',
        img: '/assets/logos/canvas.svg',
        experienceYears: 0,
        placesUsed: [
          'The Workshop',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'UnderscoreJs',
        img: '/assets/logos/underscore.svg',
        experienceYears: 1,
        placesUsed: [
          'Quidco',
        ]
      },
      {
        name: 'lodash',
        img: '/assets/logos/lodash.svg',
        experienceYears: 2,
        placesUsed: [
          'The Workshop',
          'Quidco',
          'This website',
          'Other personal projects'
        ]
      },
      {
        name: 'Mustachejs',
        img: '/assets/logos/mustachejs.svg',
        experienceYears: 0,
        placesUsed: [
          'Pulselive'
        ]
      },
      {
        name: 'Twig',
        img: '/assets/logos/twig.svg',
        experienceYears: 3,
        placesUsed: [
          'Quidco'
        ]
      },
      {
        name: 'PHP',
        img: '/assets/logos/php.svg',
        experienceYears: 7,
        placesUsed: [
          'Quidco',
          'Other personal projects'
        ]
      },
      {
        name: 'Zend',
        img: '/assets/logos/zend.svg',
        experienceYears: 3,
        placesUsed: [
          'Quidco'
        ]
      },
      {
        name: 'Typescript',
        img: '/assets/logos/typescript.svg',
        experienceYears: 1,
        placesUsed: [
          'The Workshop',
          'Other personal projects'
        ]
      },

    ];
    return {skills};
  }
}
