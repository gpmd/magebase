module.exports = {

  dist: [
    'public_html/skin/frontend/<%= project.name %>/default/css',
    'public_html/skin/frontend/<%= project.name %>/default/images',
    'public_html/skin/frontend/<%= project.name %>/default/js'
  ],

  tmp: [
    'tmp'
  ],

  modules: [
    '<%= project.src %>/js/modules/modules-combined.*'
  ]
};
