module.exports = {

  options: {
    cascade: false
  },

  main: {
    expand: true,
    flatten: true,
    src: '<%= project.dist %>/css/*.css',
    dest: '<%= project.dist %>/css/'
  }
};
