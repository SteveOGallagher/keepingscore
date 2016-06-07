var app = angular.module("myApp", []);

$('#header').mouseenter(function () {
  $('#edit-header').toggleClass('show');
});

$('#header').mouseleave(function () {
  $('#edit-header').toggleClass('show');
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