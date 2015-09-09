module.exports = {

  // Dev tasks
  scriptsDev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true,
      sourceMap: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/js',
        src: '*.js',
        dest: '<%= project.dist %>/js',
        ext: '.js'
      }
    ]
  },

  modulesDev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true,
      sourceMap: true
    },
    files: {
      'src/js/modules/modules-combined.js': ['src/js/modules/modules-combined.js']
    }
  },

  // Production tasks
  scriptsProd: {
    options: {
      mangle: true,
      compress: true,
      beautify: false,
      sourceMap: false
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/js',
        src: '*.js',
        dest: '<%= project.dist %>/js',
        ext: '.js'
      }
    ]
  },

  modulesProd: {
    options: {
      mangle: true,
      compress: true,
      beautify: false,
      sourceMap: false
    },
    files: {
      'src/js/modules/modules-combined.js': ['src/js/modules/modules-combined.js']
    }
  }
};
