const onClick = (box: TicTacToeBox, game: TicTacToeGame) => {
  // TODO: Set the letter of the box to the current turn
  box.setLetter("X");

  const winner = getWinner(game.boxes);
  if (winner === "X") {
    alert("X wins!");
    return;
  } else if (winner === "O") {
    alert("0 wins!");
    return;
  }
};

const getWinner = (boxes: TicTacToeBox[]): "X" | "O" | null => {
  // TODO: figure out who is the winner

  return null;
};

/**
 * =====
 * GAME LOGIC
 * =====
 */
class TicTacToeGame {
  boxes: TicTacToeBox[] = new Array(9)
    .fill(null)
    .map((_, i) => new TicTacToeBox(i, this));

  private currentTurn: "X" | "O" = "X";

  setUp({ boxes }: { boxes: (HTMLButtonElement | null)[] }) {
    this.boxes.forEach((box, i) => {
      box.setElement(boxes[i]);
    });
  }

  getTurn(): "X" | "O" {
    return this.currentTurn;
  }

  setTurn(turn: "X" | "O") {
    this.currentTurn = turn;
  }

  reset() {
    this.boxes.forEach((box) => {
      box.setLetter(null);
    });
    this.setTurn("X");
  }
}

class TicTacToeBox {
  private element: HTMLButtonElement | null = null;
  listeners: [string, any][] = [];

  constructor(private index: number, private game: TicTacToeGame) {}

  setLetter(letter: "X" | "O" | null) {
    console.log(`Setting the letter for box ${this.index + 1} to ${letter}`);
    if (this.element) {
      this.element.innerHTML = letter ?? "";
    }
  }

  getLetter(): "X" | "O" | null {
    return (this.element?.textContent ?? null) as any;
  }

  setElement(element: HTMLButtonElement | null) {
    if (this.element === element) {
      return;
    }
    this.listeners.forEach(([event, listener]) => {
      this.element?.removeEventListener(event, listener);
    });
    this.element = element;
    const clickListener = this.onClick.bind(this);

    this.element?.addEventListener("click", clickListener);
    this.listeners.push(["click", clickListener]);
  }

  onClick() {
    console.log(`Box ${this.index + 1} was clicked`);
    onClick(this, this.game);
  }
}

export const game = new TicTacToeGame();
