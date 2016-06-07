app.controller('MainController', ['$scope', function($scope) { 

  // $scope.title = "Keep Score";


  // document.getElementById('game-name').innerHTML = $scope.title;

  $scope.test = "test";

  $scope.players = []; 

  $scope.total = $scope.players.length;
  $scope.overallScore = 0;
  $scope.playerWidth = (100 / $scope.total) - 4 + "%";

  $scope.colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'pink', 'grey', 'black'];
  $scope.currentColour = "";
  $scope.topScore = 0;

  $scope.plusOne = function(index) { 
    $scope.players[index].score += 1; 
    $scope.overallScore++;
    $scope.updateTopScore($scope.players[index].score);
    $scope.adjustHeights();
  };

  $scope.minusOne = function(index) { 
    $scope.players[index].score -= 1; 
    $scope.overallScore--;
    // $scope.updateTopScore($scope.players[index].score);
    $scope.adjustHeights();
  };

  $scope.updateTopScore = function(score) {
    if (score > $scope.topScore){
      $scope.topScore = score;
    };
  };

  $scope.selectColour = function(index) { 
    var allColours = document.getElementsByClassName('colour-div');

    $scope.resetColours();
    allColours[index].style.borderRadius = '0%';

    $scope.currentColour = $scope.colours[index];

  };

  $scope.resetColours = function () {
    var allColours = document.getElementsByClassName('colour-div');

    for (var colour = 0; colour < allColours.length; colour++) {
      allColours[colour].style.borderRadius = '100%';
    };
  };

  $scope.adjustHeights = function() { 
  	for (var contender = 0; contender < $scope.players.length; contender++)
  	{
      var score = $scope.players[contender].score / $scope.topScore;
	    $scope.players[contender].height = (score * 100) + '%';
  	};
  };

  $scope.addPlayer = function() { 
  	$('#playerDetails').toggleClass('show');
  };

  $scope.savePlayer = function() {
    var playerName = document.getElementById('player-name').value;
    var random = Math.floor(Math.random() * $scope.colours.length);
    var height = '100%';

    if ($scope.overallScore != 0) {
      height = '0%'
    } 

  	$scope.players.push({
  		name: playerName, 
	    score: 0, 
	    color: $scope.currentColour,
	    height: height
  	});

    document.getElementById('player-name').value = "";
    $scope.colours.splice($scope.colours.indexOf($scope.currentColour),1);
  	$scope.addPlayer();
	  $scope.playerWidth = (100 / $scope.players.length) - 4 + "%";
    $scope.resetColours();
    $scope.currentColour = "black";
  };
}]);


