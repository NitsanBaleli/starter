import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import Config from './config/config';
import Common from './common/common';

export default angular
  .module('App', [uiRouter, ngSanitize, ngAnimate, Config.name, Common.name])
  .run($rootScope => {
    'ngInject';
    $rootScope.$on(
      '$stateChangeSuccess',
      (event, toState, toParams, fromState, fromParams) => {
        if (angular.isDefined(toState.title)) {
          $rootScope.title = toState.title;
        }
      }
    );
  });
