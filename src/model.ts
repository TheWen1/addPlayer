export type Player = {
  username: string;
  level: number;
};

// This array contains all the waiting players.
// It is the data of your application.
export const queue: Player[] = [];
export const activePlayers: Player[] = [];

export function addToWaitingQueue(player: Player) {
  if (!player.username || !player.level) {
    alert("Ho no :-o !");
    return false;
  }

  // vérifier si le joueur est déjà actif
  const isAlreadyActive = activePlayers.some(
    (activePlayer) => activePlayer.username === player.username
  );

  // vérifier si le joueur est déjà dans la file d'attente
  const isAlreadyInQueue = queue.some(
    (queuedPlayer) => queuedPlayer.username === player.username
  );

  if (isAlreadyActive || isAlreadyInQueue) {
    alert("Ho no no no no >:-( !");
    return false;
  }
  // Ajouter le joueur à la file d'attente
  queue.push(player);
  return true;
}

// Ticket 3: create the removeFromWaitingQueue here
export function removeFromWaitingQueue() {
  if (queue.length > 0) {
    const removedPlayer = queue.shift();

    // Vérifier si le joueur est déjà actif
    const isAlreadyActive =
      removedPlayer &&
      activePlayers.some(
        (activePlayer) => activePlayer.username === removedPlayer.username
      );

    if (removedPlayer && !isAlreadyActive) {
      addActivePlayer(removedPlayer);
      return true;
    } else {
      queue.push(removedPlayer!);
    }
  }

  return false;
}

function addActivePlayer(player: Player) {
  activePlayers.push(player);
}
