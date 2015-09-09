module.exports = {
  // Modules
  modules: {
    // options: {
    //     banner: '$(function() {\'use strict\';',
    //     footer: '});'
    // },
    src: [
      '<%= project.src %>/js/modules/module-one.js'
    ],
    dest: '<%= project.src %>/js/modules/modules-combined.js'
  }
};
