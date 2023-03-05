module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite: {
      all: {
        src: "src/Image/*.png",
        dest: "sprites/images.png",
        destCss: "src/css/sprites.css",
      },
    },
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks("grunt-spritesmith");
};
