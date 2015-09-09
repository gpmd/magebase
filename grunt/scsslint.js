module.exports = {

  main: [
    '<%= project.src %>/scss/*.scss'
  ],

  options: {
    colorizeOutput: true,
    config: '.scsslint.yaml',
    compact: true,
    force: true
  }
};
