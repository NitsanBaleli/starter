import angular from 'angular';

let Constants = angular
  .module('app.constants', [])
  .constant('DEFAULT_STATE', 'app')
  .constant('DEFAULT_STATE_NO_FTD', 'app.deposit')
  .constant('AUTHENTICATION_STATE', 'authentication.login')
  .constant('NOT_FOUND_STATE', 'misc.page-not-found');

export default Constants;
