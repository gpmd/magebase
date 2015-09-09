module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: {
      staticMappings: {
        scsslint: 'grunt-scss-lint'
      }
    },

    init: true,

    // Shared task data
    data: {

      // Build data: --env=prod, --env=dev
      env: grunt.option('env') || 'prod',

      // Project data
      project: {
        name: 'magebase',
        src: 'src',
        dist: '<% if (env === "prod") { %>tmp<% } else { %>public_html/skin/frontend/<%= project.name %>/default<% } %>'
      },

      // Components
      component: {
        modernizr: 'bower_components/modernizr/modernizr.js',
        picturefill: 'bower_components/picturefill/dist/picturefill.min.js'
      }
    }
  });
};
