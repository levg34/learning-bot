var app = angular.module('app', [])

app.controller('botCtrl', function($scope,$interval) {
	var lastMove = ''
	$scope.moves = ['+x','+y','-x','-y']
	$scope.position = {x:0,y:0}
	$scope.move = function() {
		var usedMove = $scope.moves[Math.floor(Math.random() * $scope.moves.length)]
		switch (usedMove) {
			case '+x':
				$scope.position.x += 1
				break
			case '+y':
				$scope.position.y += 1
				break
			case '-x':
				$scope.position.x -= 1
				break
			case '-y':
				$scope.position.y -= 1
				break
		}
		lastMove = usedMove
	}
	$scope.feedback = function(positive) {
		if (positive) {
			$scope.moves.push()
		} else {
			//
		}
	}
})
