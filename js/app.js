var app = angular.module("myApp", []);

$('#header').mouseenter(function () {
  $('#edit-header').addClass('show');
  $('#addPlayer').addClass('show');
});

$('#header').mouseleave(function () {
  $('#edit-header').removeClass('show');
  $('#addPlayer').removeClass('show');
});

$('#addPlayer').mouseenter(function () {
  $('#addPlayer').addClass('show');
});

$('#addPlayer').mouseleave(function () {
  $('#addPlayer').removeClass('show');
});

$('#playerDetails').mouseenter(function () {
  $('#addPlayer').addClass('show');
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