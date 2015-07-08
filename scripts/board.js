$(document).ready(function(){

  /////////////////
  // Game object //
  /////////////////

  function Game(){
    var canvas;
    var ctx;
    var WIDTH;
    var HEIGHT;
    var INTERVAL = 20; // check for redraw every (this) milliseconds

    var isDrag = false;

    var mouseX, mouseY; // Mouse coords

    var canvasValid = false; // Determines if canvas needs redraw

    // Current selection (if any), its border color and width.
    var selected;
    var selectedColor = '#000000';
    var selectedBorderWidth = 2;

    // Shadow canvas is used for selection.
    var shadowCanvas;
    var shadowCtx;

    // Mouse offset for dragging (you don't have to click center of piece to
    // drag)
    var offsetX, offsetY;

    // Padding and border style widths for mouse offset.
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;

    var boardBox = document.querySelector('.board-box');
    var pieces = [];
    this.startButton = document.getElementsByClassName('button');

    function makeCanvas(){
      var oldGame = document.getElementById('board');
      var newCanvas = document.createElement('canvas');

      if (oldGame !== null){
        boardBox.removeChild(oldGame);
      };

      newCanvas.id = 'board';
      newCanvas.width = 400;
      newCanvas.height = 400;

      boardBox.appendChild(newCanvas);
    }

    function initGame(){
      canvas = document.getElementById('board');
      HEIGHT = canvas.height;
      WIDTH = canvas.width;
      ctx = canvas.getContext('2d');
      shadowCanvas = document.createElement('canvas');
      shadowCanvas.height = HEIGHT;
      shadowCanvas.width = WIDTH;
      shadowCanvasCtx = shadowCanvas.getContext('2d');

      // Fix for double-click selecting text in canvas.
      canvas.onselectstart = function(){ return false; }

      // Fix for mouse coordinates w/ border/padding
      // see also getMouse
      if (document.defaultView && document.defaultView.getComputedStyle){
        stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['padding-left'], 10) || 0;
        stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
        styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
        styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
      }

      // make draw() fire every INTERVAL milliseconds
      setInterval(draw, INTERVAL);

      canvas.onMouseDown = mouseDown;
      canvas.onMouseUp = mouseUp;

      new Piece(50, 100, 25, 25, 'yellow');
    }

    function draw(){
      if (canvasValid == false){
        clear(ctx);
      }
    }

    $('.button').on('click', function(){
      makeCanvas();
      initGame();
    })
  }

  //////////////////
  // Piece object //
  //////////////////

  function Piece(x, y, width, height, fill){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;

    (function trackPiece(){
      pieces.push(this);
      invalidate();
    })();
  }

  //////////////////
  // Board object //
  //////////////////

  function Board(el){
    this.el = el;

    var self = this;

    (function startNewGame(){
      self.makeBoard();
    })();
  }

  Board.prototype.makeBoard = function(){
    for(var r = 0; r < 8; r++){
      for(var c = 0; c < 8; c++){
        var x = c * 50;
        var y = r * 50;

        if (r % 2 === 0){
          if (c % 2 === 0){
            ctx.fillStyle = 'green';
          } else {
            ctx.fillStyle = 'white';
          }
        } else {
          if (c % 2 === 0){
            ctx.fillStyle = 'white';
          } else {
            ctx.fillStyle = 'green';
          }
        }

        ctx.fillRect(x, y, 50, 50);
      }
    }
  };


  new Game();

});
