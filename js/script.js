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
		console.log($scope.position)
	}
	$scope.feedback = function(positive) {
		if (!lastMove) {
			//
		} else if (positive) {
			$scope.moves.push(lastMove)
		} else {
			var moves = ['+x','+y','-x','-y']
			moves = moves.filter(e => e!==lastMove)
			moves.forEach(function(move){
				$scope.moves.push(move)
			})
		}
		$scope.move()
	}
})
