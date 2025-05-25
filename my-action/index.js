const core = require('@actions/core');

try {
  const oldInput = core.getInput('old-input');
  const newInput = core.getInput('new-input');

  if (oldInput) {
    core.warning('"old-input" is deprecated. Please use "new-input" instead.');
  }

  core.info(`Using input: ${newInput || oldInput || 'none'}`);
} catch (error) {
  core.setFailed(error.message);
}