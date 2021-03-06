module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    /* Sass compiler Task */
    sass: {
      main: {
        options: {
          style: 'nested',
          noCache: true
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['*.scss'],
            dest: 'dist',
            ext: '.min.css'
          }
        ]
      }
    },

    /* Autoprefixer */
    autoprefixer: {
      your_target: {
        files: {
          'dist/product-carousel.min.css': ['dist/product-carousel.min.css'],
          'dist/product-carousel-theme.min.css': ['dist/product-carousel-theme.min.css']
        }
      },
    },

    /* Minify CSS */
    cssmin: {
      options: {
        compatibility: 'ie8',
        sourceMap: false
      },
      target: {
        files: {
          'dist/product-carousel.min.css': ['dist/product-carousel.min.css'],
          'dist/product-carousel-theme.min.css': ['dist/product-carousel-theme.min.css']
        }
      }
    },

    /* JS uglify  */
    uglify: {
      options: {
        sourceMap: false
      },
      my_target: {
        files: {
          'dist/product-carousel.min.js': ['src/product-carousel.js']
        }
      }
    }

  });


  /* Load plugins */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /* Tasks  */
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('js', ['babel', 'uglify']);

};
