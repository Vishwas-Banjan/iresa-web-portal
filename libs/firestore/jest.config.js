module.exports = {
  name: 'firestore',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/firestore',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
