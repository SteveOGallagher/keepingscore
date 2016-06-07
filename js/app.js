var app = angular.module("myApp", []);

/* Mouse events for Header section */

$('#header').mouseenter(function () {
  $('#edit-header').addClass('show');
  $('#addPlayer').addClass('show');
  $('#removePlayer').addClass('show');
});

$('#header').mouseleave(function () {
  $('#edit-header').removeClass('show');
  $('#addPlayer').removeClass('show');
  $('#removePlayer').removeClass('show');
});

/* Mouse events for Add Player button */

$('#addPlayer').mouseenter(function () {
  $('#addPlayer').addClass('show');
});

$('#addPlayer').mouseleave(function () {
  $('#addPlayer').removeClass('show');
});

/* Mouse events for Remove Player button */

$('#removePlayer').mouseenter(function () {
  $('#removePlayer').addClass('show');
});

$('#removePlayer').mouseleave(function () {
  $('#removePlayer').removeClass('show');
});

/* Mouse events for player details and info */

$('#playerDetails').mouseenter(function () {
  $('#addPlayer').addClass('show');
});

$('#player-list').mouseenter(function () {
  $('#removePlayer').addClass('show');
});



$('#edit-header').click(function(){
  $('#header-editor').toggleClass('show');
  document.getElementById('new-game-name').focus();
});

$('#game-name').click(function(){
  $('#header-editor').toggleClass('show');
  document.getElementById('new-game-name').focus();
});

$('#cancel-game-name').click(function(){
  $('#header-editor').toggleClass('show');
});

$('#save-game-name').click(function(){
  document.getElementById('game-name').innerHTML = document.getElementById('new-game-name').value;
  document.getElementById('page-title').innerHTML = document.getElementById('new-game-name').value;
  $('#header-editor').toggleClass('show');
});