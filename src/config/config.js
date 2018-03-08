import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Constants from './constants';
let Config = angular
  .module('app.config', [uiRouter, Constants.name])
  .config(
    (
      $urlRouterProvider,
      $urlMatcherFactoryProvider,
      NOT_FOUND_STATE,
      DEFAULT_STATE
    ) => {
      'ngInject';
      //allow routes to be '/route' & '/route/' (with a trailing slash)
      $urlMatcherFactoryProvider.strictMode(false);
      $urlRouterProvider.otherwise('/');
    }
  );

export default Config;
