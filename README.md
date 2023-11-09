In Computer Science a queue is an abstract Data Structure
where items are kept in order.
New items can be added at the back of the queue and
old items are taken off from the front of the queue.

For exemple, a queue of World of Warcraf players which are waiting to enter the server during a new extension launch event.
During this exercice you should simulate this waiting list of players.

## Story 1: As a server admin, I want a form to add a player in a queue.

### Acceptance criterias:

- The screen displays a form with two fields: Name and Level

### Business rules:

- the `name` attribute of the input fields are very important. It should be `username` and `level`

## Story 2: As a server admin, I want to push a button to add the new player from the form into the waiting queue

### Acceptance criterias:

- When the "add player" button is pushed, a new player is added to the end of the queue.
- The username of the players should be uniq
- If there is a player with the same username, the screen should display an error
- the screen should display the waiting queue in real time by displaying
  the username and the level of each player

### Business rules:

- the "add player" button must have the id: addPlayer
- when submitting the form, the code should call a function `addPlayer` which will consecutively call a function `addToWaitingQueue` then a function `refresh`. To bind a function to a DOM event, see
- the function `addToWaitingQueue` is declared in the `model.js` file
- the function `addToWaitingQueue` takes one argument:
  - a player of type Player:
    - A Player is a an object with this shape: { username: string, level: number } Eg: const Player = { username: "Elwëïn", level: 100 }
- The `addToWaitingQueue` returns:
  - `true` if the player has been accepted
  - `false` if:
    - the player has been rejected because its username already exists
    - OR the player level or username is empty
- The function `addToWaitingQueue` handles an existing array (the queue) called `queue` available in the scope of the file model.js
- If `addToWaitingQueue` return `false` the screen pops up an alert box to display an error (`alert` function)
- The new player is added at the end of the queue
- The function `refresh` does not take any argument. It should update the DOM to display the new waiting list by:
  - retrieving the div with the id `waitingQueue`
  - for each player in the queue, appending new elements inside the div#waitingQeue
  - you are free to design the queue like you want but the username and the level of each player should be displayed.

## Story 3: As a server admin, I want to push a button to let the first player of the queue to play.

### Acceptance criterias:

- When the "let player play" button is pushed, the first player of the queue is removed from the queue.

### Business rules:

- the "let player play" button must have the id: letPlayerPlay
- when submitting the form, the code should call a function `letPlayerPlay` which will consecutively call a function `removeFromWaitingQueue` then a function `refresh` to update the list of waiting players.
- the function `letPlayerPlay` should be bind to the html button#letPlayerPlay. Get inspiration in the last line of `index.js`
- the function `removeFromWaitingQueue` should be defined in the `model.js` file
- The function `removeFromWaitingQueue` takes no argument
- The function `removeFromWaitingQueue` return the a Player object with this shape: { username: string, level: number } Eg: { username: "Elwëïn", level: 100 }
- The function `removeFromWaitingQueue` handles an existing array (the queue) called `queue` available in the scope of the file model.js
- The new player is added at the end of the queue
- the function `removeFromWaitingQueue` should be imported in the index.js file
