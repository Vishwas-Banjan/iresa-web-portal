module.exports = {
  name: 'web-portal-data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/web-portal-data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
