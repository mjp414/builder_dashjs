/**
 * Work with strings.
 */
window.addEventListener("DOMContentLoaded", function() {
  'use strict';
  let rockford = document.getElementById('baddie1'),
    area = document.getElementById('flash'),
    left = area.offsetLeft,
    top  = area.offsetTop,
    posLeft = 0, 
    posTop = 0,
    tileSize = 32,
    gridSize = 24,



    /**
     * This is the background for the game area.
     */
    gameArea = [
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
    ],

    /**
     * These are blocks that cant be moved to, or something happens when you try to move on them.
     * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
      19,10,10,10,10,10,12,10,10,10,10,10,10,12,10,10,10,10,13,11,13,10,12,19,
      19,12,12,12,12,10,12,10,10,10,10,12,10,12,12,10,12,10,13,10,10,10,12,19,
      19,10,10,10,10,10,12,12,12,12,12,12,10,10,12,10,12,10,10,10,12,12,12,19,
      19,10,12,12,12,10,12,10,10,10,10,10,10,10,12,10,12,10,12,12,12,10,12,19,
      19,10,10,10,12,10,12,10,12,12,12,10,12,12,12,10,12,10,12,10,10,10,12,19,
      19,12,12,10,12,10,10,10,12,10,10,10,10,10,12,10,10,10,12,10,12,10,12,19,
      19,10,12,10,12,10,12,10,12,10,12,12,12,10,10,10,12,10,10,10,12,10,12,19,
      19,10,12,10,12,10,12,10,10,10,12,10,12,10,10,10,12,10,12,10,12,10,12,19,
      19,10,12,10,12,10,12,12,12,12,12,10,12,12,12,10,12,10,12,10,12,12,12,19,
      19,10,12,10,12,10,12,10,10,10,12,10,10,10,12,10,12,10,12,10,10,10,10,19,
      19,10,10,10,12,10,10,10,12,10,12,10,10,10,10,10,12,12,12,12,12,10,12,19,
      19,12,12,12,12,12,12,10,12,10,12,10,12,12,10,10,10,10,10,12,12,10,12,19,
      19,10,10,10,10,10,10,10,12,10,12,10,12,12,12,12,12,12,10,10,12,10,10,19,
      19,10,12,12,12,10,12,12,12,10,12,10,10,10,10,10,10,12,12,10,10,10,10,19,
      19,10,12,10,12,10,12,10,10,10,12,10,12,12,12,10,10,10,12,12,12,10,12,19,
      19,10,12,10,12,10,12,10,10,10,10,10,12,10,12,12,10,10,10,12,12,10,12,19,
      19,10,13,10,12,10,12,12,12,12,12,10,12,10,12,12,12,12,10,12,10,10,12,19,
      19,10,10,10,12,10,10,10,10,10,12,10,10,10,10,12,10,12,10,12,10,10,12,19,
      19,10,13,10,12,12,12,12,12,12,12,10,10,10,10,12,10,12,10,12,12,12,12,19,
      19,10,12,17,12,10,10,10,13,10,10,10,12,10,12,12,10,10,10,10,10,10,10,19,
      19,10,12,12,12,10,13,10,10,10,12,10,12,10,12,12,12,12,12,10,10,10,10,19,
      19,10,10,10,12,14,12,12,12,12,12,12,12,10,10,10,10,10,12,12,12,12,18,19,
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
    ];

    /**
     * Draw the initial gameplan
    */
   function drawGamePlan(gameArea, gameBlocks) {
     var i,e,b;
     for(i = 0; i < gameArea.length; i++) {
       e = document.createElement('div');
       e.innerHTML = '';
       e.className = 'tile t' + gameArea[i] + (gameBlocks[i] ? ' b' + gameBlocks[i] : '');
       e.id = 'n' + i;
       area.appendChild(e);
      } 
    };
    console.log('Drawing gameplan.');  
    drawGamePlan(gameArea, gameBlocks);
    
    
    /**
     * Move Rockford
    */

   let lives=5;
   
   var move = function(moveLeft, moveTop, which) {
     
     function moveIt() {
       rockford.style.left = (area.offsetLeft + posLeft*tileSize + tileSize/2) + 'px';
       rockford.style.top  = (area.offsetTop + posTop*tileSize + tileSize/2) + 'px';      
       //  console.log("
       // Moved to: " + rockford.style.left + "x" + rockford.style.top);
      };
      if(which) { rockford.className='baddie ' + which; }
      if(lives === 0){
        alert("You lose")
        window.location.reload();
      }
      
      // First if means the baddie can movie
      if(!(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize]-10)) {
        posLeft += moveLeft; 
        posTop  += moveTop;
        moveIt();
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 12)) {
        let audio = new Audio("sounds/short-oww-46070.mp3")
        audio.play();  
        lives -= 1; 
        
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 11)) {
        let audio = new Audio("sounds/collect-points-190037.mp3")
        audio.play();
        alert('Congratulations! You got the letter: K')
        var element = document.getElementById("n43")
        element.classList.remove("b11")
        
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 14)) {
        let audio = new Audio("sounds/collect-points-190037.mp3")
        audio.play();
        alert('Congratulations! You got the letter: E');
        var element = document.getElementById("n533")
        element.classList.remove("b14");
        
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 17)) {
        let audio = new Audio("sounds/collect-points-190037.mp3")
        audio.play();
        alert('Congratulations! You got the letter: Y')
        var element = document.getElementById("n483")
        element.classList.remove("b17");
        
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 13)) {
        let audio = new Audio("sounds/dragon-shout-roar-98277.mp3")
        audio.play();
        alert('Be careful! You went into the dragon!')
        lives -= 1;

      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 18)) {
        let firstGuess = prompt('Well done! You now need the password to come through! Enter password:').toUpperCase();
        let password = "KEY";
        

        if(firstGuess === password){
            let audio = new Audio("sounds/correct-6033.mp3")
            audio.play()
            alert("Well done, you're through to the next level");
            var element = document.getElementById("n550")
            element.classList.remove("b18");
            element.classList.add("b20");

        } else {
            let secondGuess = prompt("Wrong, try again!").toUpperCase();

          if (secondGuess === password){
            let audio = new Audio("sounds/correct-6033.mp3")
            audio.play()
            alert("Well done!You won!");
            var element = document.getElementById("n550")
             element.classList.remove("b18");
             element.classList.add("b20");

          } else {
            let audio = new Audio("sounds/aww-8277.mp3");
            audio.play()
            alert("You lost");
          }
      
    }
      
      } else {  // Else means the baddie cannot move because of a wall
        console.log('Block detected, cant move.');
      }

      console.log("area.offsetLeft", area.offsetLeft);
      console.log("area.offsetTop", area.offsetTop);
      console.log("posLeft", posLeft)
      console.log("posTop", posTop)
    };
    console.log('Moving Mickey Mos (Rockford) to initial spot.');  
    move(1, 1, 'down');
    
    
    /**
     * Keep track on keys pressed and move Rockford accordingly.
    */
   document.onkeydown = function(event) {
    var key;
    key = event.keyCode || event.which;
    switch(key) {
      case 37: move(-1, 0, 'left'); break;
      case 39: move(1, 0, 'right'); break;
      case 38: move(0, -1, 'up'); break;
      case 40: move(0, 1, 'down'); break; 
      default: move(0, 0, 'down'); break;
    };
    console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + rockford.offsetLeft + ', ' + rockford.offsetTop);
  };

    console.log('Everything is ready.');  
});