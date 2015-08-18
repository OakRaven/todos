'use strict';

var DetailCtrl = function() {
};

var DetailInfoCtrl = function(api, $scope, $routeParams) {
	var vm = this;
	
	vm.id = $routeParams.id;
	vm.item = api.currentItem;
	vm.save = function(){
		api.update(vm.item).then(function(){
			window.location.href = '#/';
		});
	};	
};

angular.module('todosApp')
	.controller('DetailCtrl', DetailCtrl)
	.controller('DetailInfoCtrl', DetailInfoCtrl);