module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      editor : {
        src: [
          'assets/js/artihata.editor.constants.js',
          'assets/js/artihata.editor.js'
        ],
        dest: '../resources/public/js/artihata.editor.js'
      },
      generator : {
        src: [
          'assets/js/artihata.generator.constants.js',
          'assets/js/artihata.generator.js'
        ],
        dest: '../resources/public/js/artihata.generator.js'
      }
    },
 
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      editor: {
        src: '../resources/public/js/artihata.editor.js',
        dest: '../resources/public/js/artihata.editor.min.js'
      },
      generator: {
        src: '../resources/public/js/artihata.generator.js',
        dest: '../resources/public/js/artihata.generator.min.js'
      }
    },
    watch: {
      files: ['assets/js/**/*.js'],
      tasks: ['concat', 'jasmine']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('dev', ['concat']);
};
