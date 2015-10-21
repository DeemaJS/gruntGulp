var grunt = require('grunt');

grunt.registerTask('world', 'description', function() {
	console.log('Hello world');
});

grunt.registerTask('hello', 'say hello', function(name) {
	if(!name || !name.length)
		grunt.warn('Wher is a NAME?');

	console.log('Good day ' + name);
});

grunt.registerTask('default', ['world', 'hello:Deema']);