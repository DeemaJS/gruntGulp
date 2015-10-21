var grunt = require('grunt');

grunt.registerTask('default', 'description', function() {
	console.log('First task');
});

grunt.registerTask('hello', 'say hello', function(name) {
	if(!name || !name.length)
		grunt.warn('Wher is a NAME?');

	console.log('Good day ' + name);
});