module.exports = {
  platform: 'github',
  onboardingConfig: {
    extends: ['config:base', ':preserveSemverRanges'],
    versioning: 'semver',
  },
  enabledManagers: ['composer', 'npm'],
  forkMode: true,
  includeForks: true,
  repositories: ['joomla-framework/crypt'],
};
