module.exports = {
  name: 'ngx-spotify',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-spotify',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
