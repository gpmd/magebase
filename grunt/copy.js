module.exports = {

  // Components
  components: {
    files: [
      {
        src: '<%= component.picturefill %>',
        dest: '<%= project.dist %>/js/vendor/picturefill.min.js'
      }
    ]
  },

  // Modules - Dev tasks
  modulesDev: {
    files: [
      {
        src: '<%= project.src %>/js/modules/modules-combined.js',
        dest: '<%= project.dist %>/js/modules/modules-combined.js'
      },
      {
        src: '<%= project.src %>/js/modules/modules-combined.js.map',
        dest: '<%= project.dist %>/js/modules/modules-combined.js.map'
      }
    ]
  },

  // Modules - Production tasks
  modulesProd: {
    files: [
      {
        src: '<%= project.src %>/js/modules/modules-combined.js',
        dest: '<%= project.dist %>/js/modules/modules-combined.js'
      }
    ]
  },

  // Tmp dir to dist dir
  tmpToDist: {
    files: [
      {
        expand: true,
        cwd: 'tmp/',
        src: ['**'],
        dest: 'public_html/skin/frontend/<%= project.name %>/default/'
      }
    ]
  },
};
