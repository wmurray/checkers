$(document).ready(function(){

  function Board(){
    this.boardBox = document.getElementsByClassName('board-box');
    console.log(this.boardBox);

    var self = this;

    var startNewGame = function(){
      $('.button').hide();
      self.makeCanvas();
      self.makeBoard();
    };

    $('.button').on('click', startNewGame);
  }

  Board.prototype.makeCanvas = function(){
    var oldGame = document.getElementById('board');
    var canvas = document.createElement('canvas');

    canvas.id = 'board';
    canvas.width = 400;
    canvas.height = 400;

    self.boardBox.appendChild(canvas);
  };

  Board.prototype.makeBoard = function(){
    var canvas = document.getElementById('board');
    var context2d = canvas.getContext('2d');

    for(var r = 0; r < 8; r++){
      for(var c = 0; c < 8; c++){
        var x = c * 50;
        var y = r * 50;

        if (r % 2 === 0){
          if (c % 2 === 0){
            context2d.fillStyle = 'green';
          } else {
            context2d.fillStyle = 'white';
          }
        } else {
          if (c % 2 === 0){
            context2d.fillStyle = 'white';
          } else {
            context2d.fillStyle = 'green';
          }
        }

        context2d.fillRect(x, y, 50, 50);
      }
    }
  };



  new Board();
  console.log(Board.boardBox);

});
