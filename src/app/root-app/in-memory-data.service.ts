import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    //Put sorting on this, so can filter via technologies, alphabetical etc.
    const skills = [
      {
        name: 'Javascript',
        img: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="325px" height="450px" viewBox="0 0 325 450" enable-background="new 0 0 325 450" xml:space="preserve">
      <g>
        <polygon fill="#EFC725" points="40.845,401.254 13.775,97.632 311.225,97.632 284.127,401.205 162.318,434.975 	"/>
      <polygon fill="#FBDE34" points="162.25,408.787 260.678,381.5 283.836,122.083 162.25,122.083 	"/>
      <polygon fill="#EBEBEB" points="162.193,331.426 162.031,331.473 120.559,320.272 117.906,290.575 97.756,290.575 80.527,290.575
        85.744,349.043 162.021,370.219 162.193,370.17 	"/>
      <polygon fill="#EBEBEB" points="167.209,271.937 167.209,234.7 121.355,234.7 126.732,176.258 167.312,175.177 167.209,136.454
        93.065,136.454 90.311,163.903 81.559,261.938 80.651,271.937 90.686,271.937 	"/>
      <polygon fill="#FFFFFF" points="166.957,175.229 167.12,175.183 207.791,177.632 211.242,216.079 231.393,216.079 248.623,216.079
        242.109,144.133 167.129,136.437 166.957,136.485 	"/>
      <polyline fill="#FFFFFF" points="244.784,175.343 241.593,136.454 162.99,136.454 162.99,160.606 162.99,175.246 162.99,175.343
        244.784,175.343 	"/>
      <polygon fill="#FFFFFF" points="162.064,234.718 162.064,271.954 207.918,271.954 203.596,320.247 162.064,331.459
        162.064,370.201 238.404,349.043 238.963,342.752 247.715,244.717 248.623,234.718 238.588,234.718 	"/>
      <path fill="#FFFFFF" d="M240,173.693"/>
      <g>
        <polygon fill="#151515" points="214.945,30.571 190.256,30.571 215.932,58.431 215.932,71.691 163.049,71.691 163.049,56.165
        188.719,56.165 163.049,28.306 163.049,15.025 214.945,15.025 214.945,30.571 		"/>
      <path fill="#020202" d="M153.631,15.05v56.617h-45.543V52.953h26.613V15.05h18.928H153.631z"/>
      </g>
      <path fill="#FFFFFF" d="M239.51,173.693"/>
      </g>
      </svg>`,
        imgType: 'htmlSvg',
        experienceYears: 15,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'AngularJS (1 & 2)',
        img: '/assets/logos/angularjs.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'NodeJS',
        img: `<svg width="2500" height="1533" viewBox="0 0 512 314" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="68.188%" y1="17.487%" x2="27.823%" y2="89.755%" id="b"><stop stop-color="#41873F" offset="0%"/><stop stop-color="#418B3D" offset="32.88%"/><stop stop-color="#419637" offset="63.52%"/><stop stop-color="#3FA92D" offset="93.19%"/><stop stop-color="#3FAE2A" offset="100%"/></linearGradient><path id="a" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"/><linearGradient x1="43.277%" y1="55.169%" x2="159.245%" y2="-18.306%" id="d"><stop stop-color="#41873F" offset="13.76%"/><stop stop-color="#54A044" offset="40.32%"/><stop stop-color="#66B848" offset="71.36%"/><stop stop-color="#6CC04A" offset="90.81%"/></linearGradient><linearGradient x1="-4413.77%" y1="13.43%" x2="5327.93%" y2="13.43%" id="e"><stop stop-color="#6CC04A" offset="9.192%"/><stop stop-color="#66B848" offset="28.64%"/><stop stop-color="#54A044" offset="59.68%"/><stop stop-color="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-4.389%" y1="49.997%" x2="101.499%" y2="49.997%" id="f"><stop stop-color="#6CC04A" offset="9.192%"/><stop stop-color="#66B848" offset="28.64%"/><stop stop-color="#54A044" offset="59.68%"/><stop stop-color="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-9713.77%" y1="36.21%" x2="27.93%" y2="36.21%" id="g"><stop stop-color="#6CC04A" offset="9.192%"/><stop stop-color="#66B848" offset="28.64%"/><stop stop-color="#54A044" offset="59.68%"/><stop stop-color="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="-103.861%" y1="50.275%" x2="100.797%" y2="50.275%" id="h"><stop stop-color="#6CC04A" offset="9.192%"/><stop stop-color="#66B848" offset="28.64%"/><stop stop-color="#54A044" offset="59.68%"/><stop stop-color="#41873F" offset="86.24%"/></linearGradient><linearGradient x1="130.613%" y1="-211.069%" x2="4.393%" y2="201.605%" id="i"><stop stop-color="#41873F" offset="0%"/><stop stop-color="#418B3D" offset="32.88%"/><stop stop-color="#419637" offset="63.52%"/><stop stop-color="#3FA92D" offset="93.19%"/><stop stop-color="#3FAE2A" offset="100%"/></linearGradient></defs><g fill="none"><path d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z" fill="#539E43"/><path d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zM508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0l29.125-16.99z" fill="#333"/><path d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z" fill="#539E43"/><g transform="translate(134.068 70.501)"><mask id="c" fill="#fff"><use xlink:href="#a"/></mask><use fill="url(#b)" xlink:href="#a"/><g mask="url(#c)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zM56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z"/><path d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z" fill="url(#d)"/></g><g mask="url(#c)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z"/><path fill="url(#e)" fill-rule="evenodd" d="M50.391.809l-.693.347h.924l-.231-.347z" transform="translate(0 -9.246)"/><path d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z" fill="url(#f)" fill-rule="evenodd" transform="translate(0 -9.246)"/><path fill="url(#g)" fill-rule="evenodd" d="M111.3 104.712l-.347-.578v.809l.346-.231z" transform="translate(0 -9.246)"/><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#h)" fill-rule="evenodd" transform="translate(0 -9.246)"/><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#i)" fill-rule="evenodd" transform="translate(0 -9.246)"/></g></g></g></svg>`,
        imgType: 'htmlSvg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'This website & other personal projects'
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
          'This website & other personal projects'
        ]
      },
      {
        name: 'Bootstrap (3 & 4)',
        img: '/assets/logos/bootstrap.svg',
        experienceYears: 7,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website & other personal projects'
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
          'This website & other personal projects'
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
          'This website & other personal projects'
        ]
      },
      {
        name: 'jQuery',
        img: '/assets/logos/jquery.svg',
        experienceYears: 8,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'Apache',
        img: '/assets/logos/apache.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'Nginx',
        img: '/assets/logos/nginx.svg',
        experienceYears: 5,
        placesUsed: [
          'Quidco',
          'This website & other personal projects'
        ]
      },
      {
        name: 'Mongodb',
        img: '/assets/logos/mongodb.svg',
        experienceYears: 1,
        placesUsed: [
          'This website & other personal projects'
        ]
      },
      {
        name: 'Gulp',
        img: '/assets/logos/gulp.svg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'Pulselive',
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'Webpack',
        img: '/assets/logos/webpack.svg',
        experienceYears: 2,
        placesUsed: [
          'Quidco',
          'The Workshop',
          'This website & other personal projects'
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
          'This website & other personal projects'
        ]
      },
      {
        name: 'Yarn',
        img: '/assets/logos/yarn.svg',
        placesUsed: [
          'The Workshop',
          'This website & other personal projects'
        ]
      },
      {
        name: 'Less',
        img: '/assets/logos/less.svg',
        experienceYears: 4,
        placesUsed: [
          'Quidco',
          'This website & other personal projects'
        ]

      }, {
        name: 'Sass',
        img: '/assets/logos/sass.svg'
      },
      {
        name: 'Git',
        img: '/assets/logos/git.svg'
      },
      {
        name: 'Jade/Pug',
        img: '/assets/logos/pug.svg'
      },
      {
        name: 'MySQL',
        img: '/assets/logos/mysql.svg'

      },
      {
        name: 'HammerJS',
        img: '/assets/logos/hammerjs.svg'

      },
      {
        name: 'Express',
        img: '/assets/logos/express.svg'

      },
      {
        name: 'Koa',
        img: '/assets/logos/koa.svg'

      }, {
        name: 'Agile',
        img: '/assets/logos/agile.svg'

      }, {
        name: 'Canvas',
        img: '/assets/logos/canvas.svg'
      },
      {
        name: 'UnderscoreJs',
        img: '/assets/logos/underscore.png'
      },
      {
        name: 'lodash',
        img: '/assets/logos/lodash.svg'

      }, {
        name: 'Mustachejs',
        img: '/assets/logos/mustachejs.svg',
        description: `
        <p style="line-height:1">Used at:</p>
        <ul style="text-align:left;list-style: circle;padding: 10px;">
        <li>Pulselive</li>
        <li>Other projects</li>
        </ul>`

      }, {
        name: 'Twig',
        img: '/assets/logos/twig.svg',
        description: `
        <h1 style="margin: auto">OVER 5 YEARS EXPERIENCE.</h1>
        <p style="line-height:1">Used at:</p>
        <ul style="text-align:left;list-style: circle;padding: 10px;">
        <li>Quidco</li>
        <li>Other projects</li>
        </ul>`
      },
      {
        name: 'PHP',
        img: '/assets/logos/php.svg',
        description: `
        <h1 style="margin: auto">OVER 7 YEARS EXPERIENCE.</h1>
        <p style="line-height:1">Used at:</p>
        <ul style="text-align:left;list-style: circle;padding: 10px;">
        <li>Quidco</li>
        <li>Other projects</li>
        </ul>`
      },
      {
        name: 'Zend',
        img: '/assets/logos/zend.svg',
        description: `
        <h1 style="margin: auto">OVER 3 YEARS EXPERIENCE.</h1>
        <p style="line-height:1">Used at:</p>
        <ul style="text-align:left;list-style: circle;padding: 10px;">
        <li>Quidco</li>
        <li>Other projects</li>
        </ul>`
      },
      {
        name: 'Typescript',
        img: '/assets/logos/typescript.svg',
        description: `
        <p style="line-height:1">Used at:</p>
        <ul style="text-align:left;list-style: circle;padding: 10px;">
        <li>The Workshop</li>
        <li>This website & other projects</li>
        </ul>`
      },

    ];
    return { heroes, skills };
  }
}
