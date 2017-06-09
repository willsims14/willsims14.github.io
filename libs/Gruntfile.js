module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    jshint: {
      options: {
        predef: [ "document", "console", '$', 'alert', 'jQuery', '$userContent', '$this'],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "$scope": true, "require": true, "app":true}
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../scss/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'watch']);
};


// module.exports = function(grunt) {

//   grunt.initConfig({
//     // Change the b-fy task to add a transform task
//     browserify: {
//       js: {
//           src: ['../javascripts/main.js'],
//           dest: '../dist/app.js'
//       },
//       options: {
//           transform: ['hbsfy'],
//           browserifyOptions: {
//             paths: ["./node_modules"]
//           }
//       }
//     },
//     jshint: {
//       options: {
//         predef: [ "document", "console" ],
//         esnext: true,
//         globalstrict: true,
//         globals: {},
//         browserify: true
//       },
//       files: ['../javascripts/**/*.js']
//     },
//     sass: {
//       dist: {
//         files: {
//           '../css/main.css': '../sass/main.sass'
//         }
//       }
//     },
//     watch: {
//       javascripts: {
//         files: ['../javascripts/**/*.js'],
//         tasks: ['jshint', 'browserify']
//       },
//       sass: {
//         files: ['../sass/**/*.sass'],
//         tasks: ['sass']
//       },
//       hbs: {
//         files: ['../templates/**/*.hbs'],
//         tasks: ['browserify']
//       }
//     }
//   });

//   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
//   grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
// };
