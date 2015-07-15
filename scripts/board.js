$(document).ready(function(){

  /////////////////
  // Game object //
  /////////////////

  function Game(){

    var boardbox = document.getElementById('boardBox');

    var initGame = function(){
      new Board(boardBox);
    };

    $('.button').on('click', function(){
      initGame();
    });
  }

  //////////////////
  // Piece object //
  //////////////////

  function Piece(){
  }

  //////////////////
  // Board object //
  //////////////////

  function Board(el){
    this.el = el;

    var self = this;

    (function startNewGame(){
      console.log('board invoked');
      self.makeBoard();
    })();
  }

  Board.prototype.makeBoard = function(){

    for(var i = 0; i < 64; i++){
      var square = document.createElement('div');
      square.className = 'space';
      boardBox.appendChild(square);
    }

    var spaces = document.getElementsByClassName('space');
    var spacesLength = spaces.length;
    var spacesCoords = [];

    var paintBoard = function(){
      var miniArray = [];

      for (var i = 0; i <= spaces.length; i++){
        if (i%8 !== 0 || i === 0){
          miniArray.push(spaces[i]);
        }else{
          spacesCoords.push(miniArray);
          miniArray = [];
          miniArray.push(spaces[i]);
        }
      }

      var coordsLength = spacesCoords.length;

      for (var i = 0; i < coordsLength; i++){
        var currentY = spacesCoords[i];
        for (var j = 0; j < currentY.length; j++){
          currentY[j].dataset.y = i;
          currentY[j].dataset.x = j;

          if ((j%2 === 0 && i%2 !== 0) || (j%2 !== 0 && i%2 === 0)){
            currentY[j].className = 'space green'
          }
        }
      }
    };

    paintBoard();
  };


  new Game();

});
