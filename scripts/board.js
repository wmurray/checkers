$(document).ready(function(){

  /////////////////
  // Game object //
  /////////////////

  function Game(){
    var boardBox = document.querySelector('.board-box');

  }

  //////////////////
  // Board object //
  //////////////////

  function Board(el){
    this.el = el;
    this.startButton = document.getElementsByClassName('button');

    var self = this;

    function startNewGame(){
      self.makeCanvas();
      self.makeBoard();
    };
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

  //////////////////
  // Piece object //
  //////////////////

  function Piece(x, y, width, height, fill){
    this.x = 0;
    this.y = 0;
    this.width = 1;
    this.height = 1;
    this.fill = '#000000';
  }

  new Game();

});
