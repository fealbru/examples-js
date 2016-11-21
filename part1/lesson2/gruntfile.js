module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'styles/css/main.css': 'styles/sass/main.scss'
                }
            }
        },
        watch: {
            files: ['styles/sass/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.registerTask('default', ['sass']);

};


