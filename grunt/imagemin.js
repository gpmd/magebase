module.exports = {
  all: {
    files: [{
      expand: true,
      flatten: false,
      cwd: '<%= project.src %>/',
      src: ['images/**/*.{png,jpg,gif}'],
      dest: '<%= project.dist %>/'
    }]
  }
};
