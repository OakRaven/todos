'use strict';

/**
 * @ngdoc overview
 * @name todosApp
 * @description
 * # todosApp
 *
 * Main module of the application.
 */
angular
  .module('todosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'todo'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
