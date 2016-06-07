app.controller('MainController', ['$scope', function($scope) { 

  $scope.title = "Scores";

  $scope.test = "test";

  $scope.players = [ 
	  { 
	    name: 'Cerri', 
	    score: 0, 
	    color: 'pink',
	    height: '100%'
	  }, 
	  { 
	    name: 'Paul', 
	    score: 0, 
	    color: 'grey',
	    height: '100%'
	  }
	]; 

  $scope.total = $scope.players.length;
  $scope.overallScore = 0;
  $scope.playerWidth = (100 / $scope.total) - ($scope.total * 2) + "%";

  $scope.plusOne = function(index) { 
    $scope.players[index].score += 1; 
    $scope.overallScore++;
    $scope.adjustHeights();
  };
  $scope.minusOne = function(index) { 
    $scope.players[index].score -= 1; 
    $scope.overallScore--;
    $scope.adjustHeights();
  };
  $scope.adjustHeights = function() { 
  	for (var contender = 0; contender < $scope.players.length; contender++)
  	{
	    $scope.players[contender].height = ($scope.players[contender].score / $scope.overallScore * 100) + '%';
  	};
  };
  $scope.addPlayer = function() { 
  	console.log("open player info");
  	$('#playerDetails').toggleClass('show');
  };
  $scope.savePlayer = function() {
  	$scope.players.push({
  		name: 'Aoife', 
	    score: 0, 
	    color: 'green',
	    height: '100%'
  	});
  	$scope.addPlayer();
	$scope.playerWidth = (100 / $scope.players.length) - ($scope.players.length * 2) + "%";
  };
}]);


