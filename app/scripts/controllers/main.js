'use strict';

angular.module('todosApp')

  .controller('TodoCtrl', function (api, $scope) {
    var self = this;

    self.todos = [];
    self.new_todo = '';

    var update = function () {
      api.get().then(function (data) {
        self.todos = data;
      });
    };
    
    $scope.$on('update', update);

    update();

    self.add = function (event) {
      if (event.keyCode === 13) {
        api.add(self.new_todo).then(function () {
          update();
          self.new_todo = '';
        });
      }
    };

   
  })

  .controller('MainCtrl', function () {

  });
