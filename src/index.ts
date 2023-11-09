import "./styles.css";
import {Player} from "./model"
// This is how to import something you have written in
// an other file. Once imported, it is now in
// the scope of this file and can be used.
import {
  queue,
  addToWaitingQueue,
  removeFromWaitingQueue
} from "./representation";

/**
 * This function will be called by the "add player" button
 * Hint: see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event
 */
function addPlayer(event) {
  event.preventDefault(); // don't refresh the page when submit form
  const formData = new FormData(event.target);
  
  const userName = formData.get("username")
  const userLevel = formData.get("level")
  
  if(userName !== null && userLevel !== null) {

      const player:Player = {
        username: userName as string,
        level: Number(userLevel)
      };
      addToWaitingQueue(player);

      refresh();
  }
 }
/*<button id="reset" onClick={this.props.resetTimer}>
Reset
</button>*/
/**
 * This function will be called by the "let player play" button
 */
function letPlayerPlay(event) {
  event.preventDefault(); // don't refresh the page when submit form

  removeFromWaitingQueue();
  refresh();
}
/**
 * This function will update the screen
 *
 * First, select with Javascript the DOM element you want to add
 * children within. (eg. document.getElementById("myList")
 *
 * Then :
 * - for ticket 2: for each entry of the queue, add a new element (you are free to use
 * the HTML tags and style you want).
 *
 * Hints:
 * - to select an element with an ID use, https://devdocs.io/dom/document/getelementbyid
 * - to replace the children of an, use https://devdocs.io/dom/document/replacechildren
 */
function refresh() {
  const queueList = document.getElementById("waitingQueue");

  if (queueList) {
    queueList.innerHTML = "";

    for (let i = 0; i < queue.length; i++) {
      const player = queue[i];
      const playerDiv = document.createElement("div");
      playerDiv.innerText = `(username ${player.username}) (level ${player.level})`;
      queueList.appendChild(playerDiv);
    }
  }
}

// Ticket 2: this line will bind the addPlayer
// function to the Add Player form
document.querySelector("form")?.addEventListener("submit", addPlayer);

// Ticket 3: this line will bind the letPlayerPlay
// function to the letPlayerPlay button
// document.querySelector("???").addEventListener("???", letPlayerPlay);

document
  .querySelector("#letPlayerPlay")?.addEventListener("click", letPlayerPlay);
