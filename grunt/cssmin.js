module.exports = {

  // Production settings
  main: {
    files: [
      {
        expand: true,
        cwd: '<%= project.dist %>/css/',
        src: [
          '*.css'
        ],
        dest: '<%= project.dist %>/css/',
        ext: '.css'
      }
    ]
  }
};
