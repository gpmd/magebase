module.exports = {

    // Global task options
    options: {
        outputStyle: 'expanded',
        sassDir: '<%= project.src %>/scss',
        cssDir: '<%= project.dist %>/css',
        imagesDir: '<%= project.src %>/images',
        javascriptsDir: '<%= project.src %>/js',
        relativeAssets: true,
        importPath: 'public_html/skin/frontend/rwd/default/scss'
    },

    // Development settings
    dev: {
        options: {
            sourcemap: true
        }
    },

    // Production settings
    prod: {
        options: {
            sourcemap: false
        }
    }
};
