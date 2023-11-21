import {beforeEach, describe, expect, jest, test} from '@jest/globals';
import * as model from "./model";

global.alert = jest.fn();

describe("addToWaitingQueue Acceptor", function () {
  beforeEach(function() {
    model.queue.splice(0, model.queue.length)
    model.activePlayers.splice(0, model.activePlayers.length)
  })

  // Business tests
  test("addToWaitingQueue is defined", function () {
    expect(model.addToWaitingQueue).toBeDefined();
  });

  test("accept player", function () {
    expect(
      model.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeTruthy();
  });

  test("reject proposal if the player is already playing", function () {
    const player = { username: "Elweïn", level: 1 };
    
    // Ajouter le joueur à la file d'attente
    let addToQueue = model.addToWaitingQueue(player);
  
    // Vérifier que la proposition a été acceptée la première fois
    expect(addToQueue).toBeTruthy();
  
   // déplacer le joueur aux joueurs actifs 
   const playerWaiting = model.removeFromWaitingQueue();

   // vérifier que la proposition a été acceptée 
   expect(playerWaiting).toBeTruthy()

   // Re-ajouter un joueur avec le même nom 
   addToQueue = model.addToWaitingQueue(player)

       // Vérifier que le joueur n'a pas été ajouté à la file d'attente une deuxième fois
    expect(model.queue).toHaveLength(0);
  });
  
 



  test("reject player", function () {
    expect(
      model.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeTruthy();
    expect(model.addToWaitingQueue({ username: "", level: 1 })).toBeFalsy();
    expect(
      model.addToWaitingQueue({ username: "", level: undefined as unknown as number })
    ).toBeFalsy();
  });
});

/* describe("Ticket 3", function () {
  test("removeFromWaitingQueue is defined", function () {
    expect(code.removeFromWaitingQueue).toBeDefined();
  });

  test("remove first player", function () {
    expect(code.removeFromWaitingQueue().username).toBe("Fraktar");
    expect(code.queue).toHaveLength(0);
  });
});
 */


