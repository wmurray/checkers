//
//  Checkers
//
//  Pseudo-code
//

//
//  Game Object
//

function CheckersGame(playerOneName, playerTwoName){
  blackPiecesCount property - (starts at 12)
  redPiecesCount property - (starts at 12)
  playerOneName property
  playerTwoName property

  function invoking a new Board object.

  function assigning playerOneName/playerTwoName and color to a new team.

  function generate new pieces on Board.
}

//
//  Board object
//

function Board(){
  blackSquare property
  redSquare property

  function create an 8x8 grid, alternating red/black squares when new Board object is invoked.
}

//
// Piece object
//

function Piece(){
  king property - boolean

  function move piece to empty square

  //sub functions of move - perhaps defined separately and called within move.
    function check if clicking correct team piece
      if true, proceed.
      if false, throw error.

    function check if destination square is forward/backward
      if backward, check if kingProperty is true/false
        if false, throw error.
        else continue
      else continue

    function check if destination square is occupied
      if true, throw error - cannot occupy same square as other piece.
      if false,
        check if movement was one square or more.
          if one,
            check to see if square is kingRow.
              if true, call set kingProperty to true.
              else end turn (call toggle isMyTurn in Team object).
          if two, check if skipped square is occupied.
            if true and is opposing team take piece.
            if false, throw error - cannot skip empty square.
            else throw error - cannot skip own pieces.
          else throw error - too many spaces.

    //definitions of sub functions for move function.
    function throw error. accepts argument that determines which error to throw. Maybe it's own object?

    function check number of spaces moved.

    function check if destination is kingRow.

    function set kingProperty to true after confirming it is not already true.

    function take opposing teams piece.

    //sub functions of take piece - perhaps these are defined as methods of Game.
      function decrement appropriate piecesCount property in Game object
        check if piecesCount property is > 0
          if true, continue.
          if false, end game.
}

//
//  Team object
//

function Team(){
  teamColor property
  playerName property
  isMyTurn property - boolean

  function toggle isMyTurn property boolean.
}
