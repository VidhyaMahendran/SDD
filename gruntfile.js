module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      }
    },

    
      shell: {
         
          target: {
              command: 'styleguide'
          }
      },
      express:{        
        dev:{
          options:{
            script:'app.js'
          }
        }
      }
  
  });
  grunt.registerTask('default', ['sass:dist','shell','express','watch']);
  grunt.registerTask('dev', ['express', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-express-server');
};