module.exports = {

  // Distribution settings
  dist: {
    devFile: '<%= component.modernizr %>',
    outputFile: '<%= project.dist %>/js/vendor/modernizr.min.js',
    'extra': {
      'localstorage': true,
      'touch': true,
      'shiv': true,
      'mq': true,
      'cssclasses': true,
      'teststyles': true,
      'prefixes': true,
      'load': true,
      'picture': true
    },
    files: {
      src: [

        // Scripts
        '<%= project.dist %>/js/{,*/}*.js',
        '!<%= project.dist %>/js/vendor/*',

        // Styles
        '<%= project.dist %>/css/{,*/}*.css',
      ]
    }
  }
};
