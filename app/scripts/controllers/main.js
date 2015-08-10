'use strict';

angular.module('todosApp')

  .controller('TodoCtrl', function (api) {
    var self = this;

    self.todos = [];
    self.new_todo = '';

    var update = function () {
      api.get().then(function (data) {
        self.todos = data;
      });
    };

    update();

    self.add = function (event) {
      if (event.keyCode === 13) {
        api.add(self.new_todo).then(function () {
          update();
          self.new_todo = '';
        });
      }
    };

    self.save = function (event, todo) {
      if (event.keyCode === 13) {
        api.update(todo, update);
      }
    };

    self.done = function (todo) {
      api.delete(todo).then(update);
    };
  })

  .controller('MainCtrl', function () {

  });
