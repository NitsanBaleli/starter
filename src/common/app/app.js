import angular from 'angular';
import AppComponent from './app.component';
import './app.scss';
export default angular
  .module('app.main', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('app', {
      url: "/",
      component: 'app',
    });
  })
  .component(AppComponent.name, AppComponent);
