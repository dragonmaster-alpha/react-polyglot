import Polyglot from 'node-polyglot';

export type t = typeof Polyglot.prototype.t;

// TODO: Remove after deprecation of number from interpolations in v0.3.0
export const NO_NUMBER_INTERPOLATIONS = [
  'Warning:',
  'Use of the interpolations prop as a shorthand for smart_count have been deprecated in favor of the count prop and will be removed in the next major version.',
  'Please update your app to use that instead.',
].join(' ');

export const NO_POLYGLOT_CONTEXT = [
  'Warning:',
  't is called without Polyglot context.',
  'Perhaps you need to wrap the component in <I18n>?',
].join(' ');
