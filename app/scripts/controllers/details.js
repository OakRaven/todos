'use strict';

var DetailCtrl = function() {
};

var DetailInfoCtrl = function(api, $scope, $routeParams) {
	var vm = this;
	
	vm.id = $routeParams.id;
	vm.item = {};
	vm.save = function(){
		api.update(vm.item).then(function(){
			window.location.href = '#/';
		});
	};
	
	$scope.$watch(function(){		return vm.id;	}, function(){
		api.getOne(vm.id).then(function(data){
			vm.item = data;
		});
	});
	
};

angular.module('todosApp')
	.controller('DetailCtrl', DetailCtrl)
	.controller('DetailInfoCtrl', DetailInfoCtrl);