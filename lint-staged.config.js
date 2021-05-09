module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  // Run ESLint on all JavaScript/TypeScript files
  '**/*.(ts)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
};
