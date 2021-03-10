module.exports = {
  safeBump: false,
  git: {
    commitMessage: ':bookmark: Release ${version}',
    requireCleanWorkingDir: false,
    requireUpstream: false,
    tagName: 'v${version}',
    commitArgs: ['-S', '-n'],
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
    draft: true,
    releaseName: '🚀 🎊 🎉 Release ${version} 🎉 🎊 🚀',
  },
  hooks: {
    'after:git:release':
      'git push origin HEAD && npx gitmoji-changelog ${version}',
  },
  npm: {
    publish: false,
  },
};
