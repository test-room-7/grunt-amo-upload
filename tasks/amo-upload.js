'use strict';

const { createReadStream } = require('fs');
const deploy = require('firefox-extension-deploy');

const taskName = 'amo_upload';
const taskDescription = 'Upload an extension to AMO';

module.exports = (grunt) => {
	grunt.registerTask(taskName, taskDescription, async function() {
		const data = grunt.config.get(this.name);
		data.src = createReadStream(data.src);

		const done = this.async();
		try {
			await deploy(data);
			grunt.log.ok('Uploaded successfully.');
		} catch (err) {
			grunt.log.error(err);
		} finally {
			done();
		}
	});
};
