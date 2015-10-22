var grunt = require('grunt');

/*grunt.registerTask('world', 'description', function() {
	console.log('Hello world');
});

grunt.registerTask('hello', 'say hello', function(name) {
	if(!name || !name.length)
		grunt.warn('Wher is a NAME?');

	console.log('Good day ' + name);
});

grunt.registerTask('default', ['world', 'hello:Deema']);*/

grunt.initConfig({
	print: {
		target1: ['index.html', 'src/styles.css', 2],
		target2: 'data',
		hello: 'world'
	}
});

grunt.registerMultiTask('print', 'print targets', function() {
	grunt.log.writeln(this.target + ': ' + this.data);
});

grunt.log.ok('Ther good');
