# grunt-amo-upload [![NPM][NpmBadge]][Npm] [![Test][WorkflowBadge]][Workflow]

A Grunt task to upload a WebExtension to Addons.mozilla.org.

## Usage

You can install `grunt-amo-upload` by a following way:
```sh
> npm install --save-dev grunt-amo-upload
```

Then you can add a configuration section for
`amo_upload` task in your `Gruntfile.js`:

```js
// If you dont' use a `load-grunt-tasks` module,
// you should load `grunt-amo-upload` directly.
grunt.loadNpmTasks('grunt-amo-upload');

grunt.initConfig({
	amo_upload: {
		issuer: 'Your AMO issuer',
		secret: 'Your AMO secret,
		id: 'Your extension  ID,
		version: 'Version to upload',
		src: 'path/to/zip/file,
	}
});
```

## License

Licensed under the [MIT License](./LICENSE).

<!-- Badges -->
[NpmBadge]: https://img.shields.io/npm/v/grunt-amo-upload
[WorkflowBadge]: https://github.com/web-scrobbler/grunt-amo-upload/workflows/Lint/badge.svg

<!-- Related pages -->
[Npm]: https://www.npmjs.com/package/grunt-amo-upload
[Workflow]: https://github.com/web-scrobbler/grunt-amo-upload/actions?query=workflow%3ALint
