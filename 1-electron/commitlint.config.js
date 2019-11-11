module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-min-length': [1, 'always',0],
    'body-max-length': [1, 'always','Infinity'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'wip'
      ]
    ]
  }
};
