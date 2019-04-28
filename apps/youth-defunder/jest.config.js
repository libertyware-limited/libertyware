module.exports = {
  name: 'youth-defunder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/youth-defunder/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
