module.exports = {
  name: 'shared-utilities',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/utilities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
