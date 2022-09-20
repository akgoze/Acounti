module.exports = {
  inputDir: './src/assets/icons', // (required)
  outputDir: './src/assets/fonts', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['scss'],
  fontsUrl: './../fonts',
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    woff: {
      // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
      metadata: '...'
    },
  },
  // Use a custom Handlebars template
  // templates: {
  //   css: './my-custom-tp.css.hbs'
  // },
  // pathOptions: {
  //   ts: './src/types/icon-types.ts',
  //   json: './misc/icon-codepoints.json'
  // },
  // Customize generated icon IDs (unavailable with `.json` config file)
  getIconId: ({
    basename = 'icon', // `string` - Example: 'foo';
    relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    relativeFilePath, // `string` - Example: 'foo.svg'
    index // `number` - Example: `0`
  }) => [basename].join('-') // '0_foo'
};