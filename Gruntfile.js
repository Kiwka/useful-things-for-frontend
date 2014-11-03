module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({
		stylus: {
			options: {
				compress: false,
				firebug: false,
			},
			all: {
				options: {
					paths: ['styl/'],
					use: [
						function() {
							return require('autoprefixer-stylus')('last 3 version', 'ie >= 8');
						}
					],
				},
				files: [
					{
						'css/global.css': 'styl/global.styl'
					},
				],
			},
		},

		csso: {
			dist: {
				src: 'css/global.css',
				dest:'css/global.min.css'
			}
		},

		watch: {
			styl: {
				files: ['styl/**/*.styl'],
				tasks: ['stylus:all', 'csso']
			},
			livereload: {
				options: { livereload: true },
				files: ['*.html','css/**/*.css'],
			},
		},
	});

	grunt.loadNpmTasks('autoprefixer-stylus');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-csso');

	grunt.registerTask('default', ['stylus','csso','watch']);
};
