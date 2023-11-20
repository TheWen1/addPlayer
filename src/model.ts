export type Player = {
  username: string
  level: number
}

// This array contains all the waiting players.
// It is the data of your application.
export const queue: Player[] = [];
export const activePlayers: Player[] = [];

export function addToWaitingQueue(player: Player) {
 
  if (!player.username || !player.level) {
    alert("Ho no :-o !");
    return false;
  }
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].username === player.username) {
      alert("Ho no no no no >:-( !");
      return false;
    }
  }

  queue.push(player);
  return true;
}



// Ticket 3: create the removeFromWaitingQueue here
export function removeFromWaitingQueue() {
  if (queue.length > 0) {
    const removedPlayer = queue.shift();
    if (removedPlayer) {
    addActivePlayer(removedPlayer);
    }
    return true;
  } else {
    return false;
  }
}

 function addActivePlayer(player: Player) {
 activePlayers.push(player);
}



