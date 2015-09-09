module.exports = function(grunt, data) {

  // Set output directory to dist
  data.project.dist = 'public_html/skin/frontend/<%= project.name %>/default';

  return {

    options: {
      spawn: false,
      livereload: true
    },

    scripts: {
      files: [
        '<%= project.src %>/js/**/*.js'
      ],
      tasks: [
        'jshint:scripts',
        'concat',
        'uglify',
        'copy:modules'
      ]
    },

    styles: {
      files: [
        '<%= project.src %>/scss/**/*.scss'
      ],
      tasks: [
        'scsslint',
        'sass:dev'
      ]
    }
  };
};
