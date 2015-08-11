'use strict';

angular.module('todosApp')

  .controller('TodoCtrl', function (api, $scope) {
    var self = this;

    self.todos = [];

    var update = function () {
      api.get().then(function (data) {
        self.todos = data;
      });
    };
    
    $scope.$on('update', update);

    update();

   
  })

  .controller('MainCtrl', function () {

  });
