module.exports = {
  platform: 'github',
  onboardingConfig: {
    extends: ['config:base', ':preserveSemverRanges', ':disableMajorUpdates'],
    versioning: 'semver',
    dependencyDashboard: true,
    prHeader: '[![Renovate Joomla](https://camo.githubusercontent.com/80b6571d15d8ec7de8bd9f85a9f42e288ee0735c499641c2a6d05b346d552a52/68747470733a2f2f6170702e72656e6f76617465626f742e636f6d2f696d616765732f62616e6e65722e737667)](https://joomla.org)',
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
