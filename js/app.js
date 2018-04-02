(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular.module('toDoApp', [])
		.controller('toDoController', ['$scope', function ($scope) {

			$scope.text = '';
			$scope.todos = [
				{id: 0, text: '吃饭', completed: false},
				{id: 1, text: '睡觉', completed: false},
				{id: 2, text: '打豆豆', completed: true}
			];

			function getId() {
				var id = Math.random();
				for (var i = 0; i < $scope.todos.length; i++) {
					if ($scope.todos[i].id === id) {
						id = Math.random();
						break;
					}
				}
				return id;
			}

			//添加todo元素
			$scope.add = function ($event) {
				if(!$scope.text){
					return;
				}
				if ($event.keyCode == 13) {
					$scope.todos.push({
						//自动增长
						// id: $scope.todos.length,
						id: getId(),
						text: $scope.text,
						completed: false
					});
					//清空文本框
					$scope.text = '';
				}
			};
			//移除todos元素
			$scope.remove = function (id) {
				//选择删除的元素
				for (var i = 0; i < $scope.todos.length; i++) {
					if ($scope.todos[i].id === id) {
						$scope.todos.splice(i, 1);
						break;
					}
				}
			};
			//清空todo元素
			$scope.clear = function () {
				var result = [];
				for (var i = 0; i < $scope.todos.length; i++) {
					if (!$scope.todos[i].completed) {
						result.push($scope.todos[i]);
					}
				}
				$scope.todos = result;
			};
			//判断是否显示Clear completed元素
			$scope.existCompleted = function () {
				for (var i = 0; i < $scope.todos.length; i++) {
					if ($scope.todos[i].completed) {
						return true
					}
				}
				return false
			};
			//双击编辑文本内容
			$scope.currentEditingId = -1;
			$scope.editing = function (id) {
				// for (var i = 0; i < $scope.todos.length; i++) {
				// 	if ($scope.todos[i].completed) {
				// 		alert(1)
				// 	}
				// }
				$scope.currentEditingId = id;
			};


			$scope.saveEditing = function (id) {
				$scope.currentEditingId = -1;
			};
			//全选
			var now = true;
			$scope.checkboxAll = function () {
				for (var i = 0; i < $scope.todos.length; i++) {
					$scope.todos[i].completed = now;
				}
				now = !now;
			}
		}])

})(angular);
