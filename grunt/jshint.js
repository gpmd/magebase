module.exports = {

  options: {
    reporter: require('jshint-stylish')
  },

  buildTools: [
    'Gruntfile.js',
    'grunt/*.js'
  ],

  scripts: [
    '<%= project.src %>/js/**/*.js',
    '!<%= project.src %>/js/**/*-combined.*'
  ]
};
