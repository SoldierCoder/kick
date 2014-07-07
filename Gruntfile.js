module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      target1: ['Gruntfile.js', 'js/app.js', 'spec/*.js']
    },
    copy: {
      main: {
        files: [
          { 
            expand: true, 
            flatten: true, 
            src: ['bootstrap.css', 'bootstrap-theme.css'], 
            cwd: '/home/ed/JS/kick/bower_components/bootstrap/dist/css',  
            dest: 'css/', filter: 'isFile'
          },
          { 
            expand: true, 
            flatten: true, 
            src: ['*.js'], 
            cwd: '/home/ed/JS/kick/bower_components/bootstrap/dist/js',  
            dest: 'js/', filter: 'isFile'
          },
         { 
            expand: true, 
            flatten: true, 
            src: ['angular.min.js'], 
            cwd: '/home/ed/JS/kick/bower_components/angular',  
            dest: 'js/', filter: 'isFile'
          },
           /*
	         { 
            expand: true, 
            flatten: true, 
            src: ['jquery.min.js'], 
            cwd: '/home/ed/JS/kick/bower_components/jquery/dist',  
            dest: 'js/', filter: 'isFile'
          },
	        {
            expand: true,
	          flatten: true,
            src: ['index.html'],
            cwd: '/home/ed/JS/BoilerPlate/Angular-Bootstrap',
            dest: '.', filter: 'isFile'
          },
	       */
          {
            expand: true,
            flatten: true,
            src: ['*.png'],
            cwd: '/home/ed/CodeSchool/Badge_Images',
            dest: 'images/', filter: 'isFile'
          }
        ]
      }
    },
    coffee: {
      target1: {
        expand: true,
        flatten: true,
        cwd: 'src/',
        src: ['*.coffee'],
        dest: 'js/',
        ext: '.js'
      }
    },
    jasmine: {
      kick: {
        src: 'js/app.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js'
        }
      }
    },
    watch: {
      files: ['js/app.js', '<%= jasmine.kick.options.specs %>'],
      tasks: ['jshint']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['copy','jshint']);
  grunt.registerTask('lint', ['jshint']);

};
