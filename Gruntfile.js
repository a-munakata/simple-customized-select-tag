module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-livereload");
  grunt.loadNpmTasks("grunt-regarde");

  var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  grunt.initConfig({
    liverelod: {
      port: 35729
    },

    connect: {
      htdocs: {
        options: {
          base: "htdocs/",
          port: 9000,
          middleware: function( connect, options ) {
            return [lrSnippet, connect.static( options.base ), connect.directory( options.base ) ];
          }
        }
      }
    },

    regarde: {
      livereload: {
        files: "htdocs/**/*",
        tasks: ["livereload"]
      }
    }
  });

  grunt.registerTask('default', ["livereload-start", "connect", "regarde"]);
}