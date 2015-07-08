$(document).ready(function(){

  function Board(el){
    this.el = el;
    this.startButton = document.getElementsByClassName('button');

    var self = this;

    function startNewGame(){
      self.makeCanvas();
      self.makeBoard();
    };

    $(this.startButton).on('click', function(){
      startNewGame();
    });
  }

  Board.prototype.makeCanvas = function(){
    var oldGame = document.getElementById('board');
    var canvas = document.createElement('canvas');

    if (oldGame !== null){
      this.el.removeChild(oldGame);
    }

    canvas.id = 'board';
    canvas.width = 400;
    canvas.height = 400;

    this.el.appendChild(canvas);
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

  var boardBox = document.querySelector('.board-box');
  new Board(boardBox);

});
