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

  function Piece(color, startSquare){
    this.color = color;
    this.startSquare = startSquare;
    this.king = false;

    this.el = (function(piece){
      var el = document.createElement('div');
      el.className = 'piece ' + piece.color;
      piece.startSquare.appendChild(el);

      return el;
    })(this);

    this.el.onclick = function(e) {
      e.stopPropagation();
      $('.active').removeClass('active');
      $(this).addClass("active");

      return false;
    };
  }

  function Square() {
    this.el = (function() {
      var square = document.createElement('div');
      square.className = 'space';
      return square;
    })();

    this.playable = false;
    var self = this;

    this.el.onclick = function() {
      var activePiece = $(".active");
      var targetSpaceYCoord = parseInt($(this).attr('data-y'));
      var currentYCoord = parseInt($(activePiece).parent().attr('data-y'));

      console.log(targetSpaceYCoord === (currentYCoord + 1));


      if(activePiece.length > 0 & self.playable === true) {
        if(targetSpaceYCoord === currentYCoord + 1) {
          $(this).append(activePiece);
          activePiece.removeClass('active');
        }
        //$(this).append(activePiece);
        //activePiece.removeClass("active");
      }
    };
  };

  Square.prototype.assignCoordinates = function(x, y) {
    this.el.dataset.y = x;
    this.el.dataset.x = y;
  };

  Square.prototype.isPlayable = function() {
    this.el.className = 'space green';
    this.playable = true
  }

  Square.prototype.moveSingleSpace = function(targetSpace) {
    var activePiece = $('.active');
      console.log('hi');
//    if($(targetSpace).attr('data-y') === $(activePiece).parent().attr('data-y') + 1) {
//      $(targetSpace).append(activePiece);
//      activePiece.removeClass('active');
//    }
  };

  function Board(el){
    this.el = el;
    this.makeBoard();
  }

  Board.prototype.makeBoard = function(){
    var totalRows = 8;
    var totalColumns = 8;
    var totalSquares = totalRows * totalColumns;

    var squares = [];
    for(var i = 0; i < totalSquares; i++){
      var square = new Square();
      squares.push(square);
      boardBox.appendChild(square.el);
    }

    var boardRows = (function() {
      var boardRows = [];
      var row = [];

      for (var i = 0; i <= totalSquares; i++){
        if (i%8 !== 0 || i === 0){
          row.push(squares[i]);
        }else{
          boardRows.push(row);
          row = [];
          row.push(squares[i]);
        }
      }

      return boardRows;
    })();

    var paintBoard = function(){
      for (var row = 0; row < totalRows; row++){
        var currentRow = boardRows[row];
        for (var column = 0; column < totalColumns; column++){
          var square = currentRow[column];
          square.assignCoordinates(row, column);

          if ((column%2 === 0 && row%2 !== 0) || (column%2 !== 0 && row%2 === 0)){
            square.isPlayable();
          }
        }
      }
    };

    var addPieces = function(){
      var greenSquares = $('.green');

      for(var i = 0; i < greenSquares.length; i++){
        if(greenSquares[i].getAttribute('data-y')< 3){
          new Piece('blue', greenSquares[i]);
        }else if(greenSquares[i].getAttribute('data-y') > 4){
          new Piece('gray', greenSquares[i]);
        }
      }
    };

    paintBoard();
    addPieces();
  };


  new Game();

});
