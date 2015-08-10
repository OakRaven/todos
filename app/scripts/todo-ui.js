'use strict';

angular.module('todo')
	.directive('todo', function (api) {
		return {
			scope: {
				item: '=todo'
			},
			template: '<button ng-click="done(item)" class="btn btn-xs btn-danger">Done</button><input type="text" ng-model="item.text" ng-keyup="save($event)">',
			link: function (scope) {
				scope.save = function (event) {
					if (event.keyCode === 13) {
						api.update(scope.item).then(function () {
							scope.$emit('update');
						});
					}
				};

				scope.done = function () {
					api.delete(scope.item).then(function () {
						scope.$emit('update');
					});

				};
			}
		};
	});