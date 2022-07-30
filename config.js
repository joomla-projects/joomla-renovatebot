module.exports = {
  platform: 'github',
  onboardingConfig: {
    extends: ['config:base', ':preserveSemverRanges', ':disableMajorUpdates'],
    versioning: 'semver',
    dependencyDashboard: true,
    lockFileMaintenance: { enabled: true }
  },
  enabledManagers: ['composer', 'npm'],
  forkMode: true,
  includeForks: true,
  repositories: [
    'joomla/joomla-cms',
    'joomla/api.joomla.org',
    'joomla/com_jed4',
    'joomla/framework.joomla.org',
    'joomla/help.joomla.org',
    'joomla/install-from-web-server',
    'joomla/jissues',
    'joomla/Manual',
    'joomla-extensions/jedchecker',
    'joomla-extensions/patchtester',
    'joomla-extensions/weblinks',
    'joomla-projects/custom-elements',
    'joomla-projects/jorobo'
  ],
};
