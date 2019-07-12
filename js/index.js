/**
 * Tic Tac Chase Toe Game
 * @author Usman Bashir <me@usmanbashir.com>
 * @copyright 2019
 * @version 0.4.0
 */

// Enable strict mode to eliminate some JavaScript silent errors 
// by changing them to throw errors. And help JavaScript engines 
// to perform optimizations to run the code faster.
'use strict';

import Map from './map.js';
import Weapon from './weapon.js';
import Player from './player.js';

/**
 * Get everything setup and the game responding to user actions.
 * This method requires the classes {@link Map}, {@link Weapon} and {@link Player}.
 * @function
 */
const init = function() {
  console.log("Tic Tac Chase Toe Init...");

  const WEAPONS = [
    new Weapon ({
      name: "Pistol",
      className: "pistol",
      damage: 10,
      src: "images/weapons/pistol.png",
    }),
    new Weapon ({
      name: "Shotgun",
      damage: 20,
      className: "shotgun",
      src: "images/weapons/shotgun.png",
    }),
    new Weapon ({
      name: "Machine Gun",
      damage: 30,
      className: "machinegun",
      src: "images/weapons/machinegun.png",
    }),
    new Weapon ({
      name: "Sniper",
      damage: 40,
      className: "sniper",
      src: "images/weapons/sniper.png",
    }),
  ];

  const PLAYERS = [
    new Player({
      name: "Player 1",
      className: "playerOne",
      src: "images/people/soldier/stand.png",
      health: 100,
    }),
    new Player({
      name: "Player 2",
      className: "playerTwo",
      src: "images/people/hitman/stand.png",
      health: 100,
    }),
  ];

  const elmMap = document.querySelector(".map");
  const map = new Map(10, 10, 90, elmMap, WEAPONS, PLAYERS);

  // Take the pre-defined weapons and randomly distribute them across the game board.
  WEAPONS.forEach(weapon => {
    weapon.placeSelfOnMap(map, WEAPONS);
  });

  // Take the pre-defined players and randomly distribute them across the game board.
  PLAYERS.forEach(player => {
    player.placeSelfOnMap(map, PLAYERS, WEAPONS);
  });

  // Start the game by giving the first turn to player one.
  const currentPlayer = PLAYERS[0];
  currentPlayer.takeTurn(map);
}

// Call the initialization function when the DOM is done loading to 
// get everything setup and the game responding to user actions.
document.addEventListener("DOMContentLoaded", () => init());