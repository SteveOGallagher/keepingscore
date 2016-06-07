app.controller('MainController', ['$scope', function($scope) { 

  $scope.test = "test";

  $scope.players = [
    // {
    //   name: "Bob", 
    //   score: 0, 
    //   color: 'green',
    //   height: "100%"
    // },
    // {
    //   name: "John", 
    //   score: 0, 
    //   color: "blue",
    //   height: "100%"
    // }
  ]; 

  $scope.total = $scope.players.length;
  $scope.overallScore = 0;
  $scope.playerWidth = (100 / $scope.total) - 4 + "%";

  $scope.colours = ['orangered', 'orange', 'yellow', 'green', 'blue', 'indigo', 'pink', 'grey', 'black'];
  $scope.currentColour = "";
  $scope.selectedPlayer = "";
  $scope.topScore = 0;

  $scope.plusOne = function(index) { 
    $scope.players[index].score += 1; 
    $scope.overallScore++;
    $scope.updateTopScore($scope.players[index].score);
    $scope.adjustHeights();
  };

  $scope.minusOne = function(index) { 
    if ($scope.checkTopScore() == false && $scope.players[index].score == $scope.topScore) {
      $scope.topScore -= 1; 
    };

    $scope.players[index].score -= 1; 
    $scope.overallScore--;
    $scope.adjustHeights();
  };

  $scope.updateTopScore = function(score) {
    if (score > $scope.topScore){
      $scope.topScore = score;
    };
  };

  $scope.checkTopScore = function(score) {
    var count = 0;
    var multiple = false;

    for (var i = 0; i < $scope.players.length; i++){
      if ($scope.players[i].score == $scope.topScore){
        count++;
      };
    }

    if (count > 1){
      multiple = true;
    };

    return multiple;
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

  $scope.selectPlayerToRemove = function(index) { 
    var allPlayers = document.getElementsByClassName('remove-player-name');

    $scope.resetPlayers();
    allPlayers[index].style.color = 'red';

    $scope.selectedPlayer = index;

  };

  $scope.resetPlayers = function () {
    var allPlayers = document.getElementsByClassName('remove-player-name');

    for (var p = 0; p < allPlayers.length; p++) {
    allPlayers[p].style.color = '#003366';
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
    if (document.getElementById('addPlayer').innerHTML != "<p>Cancel</p>"){
      document.getElementById('addPlayer').innerHTML = "<p>Cancel</p>"
    } else {
      document.getElementById('addPlayer').innerHTML = "<p>Add Player</p>"
    }
  };

  $scope.removePlayer = function() { 
    $('#player-list').toggleClass('show');
    if (document.getElementById('removePlayer').innerHTML != "<p>Cancel</p>"){
      document.getElementById('removePlayer').innerHTML = "<p>Cancel</p>"
    } else {
      document.getElementById('removePlayer').innerHTML = "<p>Remove Player</p>"
    }
  };

  $scope.saveRemoval = function() {
    $scope.players.splice($scope.selectedPlayer, 1);
    $scope.removePlayer();
    $scope.playerWidth = (100 / $scope.players.length) - 4 + "%";
    $('#removePlayer').removeClass('show');
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
    $('#addPlayer').removeClass('show');
  };
}]);


